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
    try {
      const pokemonName = get(searchTextState)
        .replace(/['+-_: ]+/g, "")
        .toLowerCase();
      if (pokemonName === "") return [];

      const fetchArray = [
        fetch(
          `http://localhost:4000/pokemonlist?krname_like=${pokemonName}&_limit=5`,
        ),
        fetch(
          `http://localhost:4000/pokemonlist?search_like=${pokemonName}&_limit=5`,
        ),
      ];
      const response = await Promise.all(fetchArray);

      if (!response.every((res) => res.ok)) throw new Error("Network Error");

      const [korean, english]: PokemonListProps[] =
        await Promise.all<PokemonListProps>(response.map((res) => res.json()));

      if (!korean || !english) throw new Error("Not Found Error");

      return korean.length === 0 ? english : korean;
    } catch (error: unknown) {
      const data = (error as Error).message;

      throw new Error(data);
    }
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
