import { atom, selector } from "recoil";

interface PokemonListProps {
  id: string;
  enname: string;
  search: string;
  krname: string;
}

export const searchTextState = atom<string>({
  key: "searchTextState",
  default: "",
});

export const searchListState = selector<PokemonListProps[]>({
  key: "searchListState",
  get: async ({ get }) => {
    try {
      const pokemonName = get(searchTextState)
        .replace(/['+-_: ]+/g, "")
        .toLowerCase();
      if (pokemonName === "") return [];
      const fetchArray = [
        fetch(`${import.meta.env.VITE_API_KR_LIST}${pokemonName}`),
        fetch(`${import.meta.env.VITE_API_EN_LIST}${pokemonName}`),
      ];
      const response = await Promise.all(fetchArray);
      if (!response.every((res) => res.ok)) throw new Error("Network Error");

      const [korean, english] = await Promise.all<PokemonListProps[]>(
        response.map((res) => res.json()),
      );

      if (!korean || !english) throw new Error("Not Found Error");
      return korean.length === 0 ? english : korean;
    } catch (error: unknown) {
      const data = (error as Error).message;
      throw new Error(data);
    }
  },
});

export const searchDetailIndex = atom({
  key: "searchDetailIndex",
  default: -1,
});
