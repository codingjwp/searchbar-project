import { atom, selector, DefaultValue } from "recoil";

export interface PokemonListProps {
  id: string;
  enname: string;
  search: string;
  krname: string;
}

const searchTextState = atom<string>({
  key: "searchTextState",
  default: "",
});

export const searchListState = selector<
  string | PokemonListProps[] | DefaultValue
>({
  key: "searchListState",
  get: async ({ get }) => {
    const pokemonName = get(searchTextState)
      .replace(/['+-_: ]+/g, "")
      .toLowerCase();
    if (pokemonName === "") return [];
    const [korean, english] = await Promise.all([
      fetch(
        `http://localhost:4000/pokemonlist?krname_like=${pokemonName}&_limit=5`,
      ),
      fetch(
        `http://localhost:4000/pokemonlist?search_like=${pokemonName}&_limit=5`,
      ),
    ]);
    const krData = (await korean.json()) as PokemonListProps[];
    const enData = (await english.json()) as PokemonListProps[];

    return krData.length === 0 ? enData : krData;
  },
  set: ({ set }, newValue) =>
    set(
      searchTextState,
      newValue instanceof DefaultValue
        ? newValue
        : typeof newValue === "string"
        ? newValue
        : "",
    ),
});
