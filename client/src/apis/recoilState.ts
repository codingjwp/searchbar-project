import { atom, selectorFamily } from 'recoil';

interface PokemonListProps {
  id: string;
  enname: string;
  search: string;
  krname: string;
}

export const searchListState = selectorFamily<PokemonListProps[], string>({
  key: 'searchListState',
  get: (name: string) => async () => {
    try {
      const pokemonName = name.replace(/['+-_: ]+/g, '').toLowerCase();
      if (pokemonName === '') return [];
      const fetchArray = [
        fetch(`${import.meta.env.VITE_API_KR_LIST}${pokemonName}`),
        fetch(`${import.meta.env.VITE_API_EN_LIST}${pokemonName}`),
      ];
      const response = await Promise.all(fetchArray);
      if (!response.every((res) => res.ok)) throw new Error('Network Error');

      const [korean, english] = await Promise.all<PokemonListProps[]>(
        response.map((res) => res.json()),
      );

      if (!korean || !english) throw new Error('Not Found Error');
      return korean.length === 0 ? english : korean;
    } catch (error: unknown) {
      const data = (error as Error).message;
      throw new Error(data);
    }
  },
});

interface PokemonDBProps {
  id: string;
  number: string;
  enname: string;
  form1: string;
  form2: string;
  form3: string;
  form4: string;
  form5: string;
  type1: string;
  type2: string;
  hp: string;
  attack: string;
  defense: string;
  spattack: string;
  spdefense: string;
  speed: string;
  krname: string;
  imgname: string;
}

export const pokemonDB = selectorFamily<PokemonDBProps | undefined, string>({
  key: 'pokemonStateDB',
  get: (id: string) => async () => {
    try {
      if (id === '') return undefined;
      const response = await fetch(`${import.meta.env.VITE_API_DB}${id}`);
      if (!response.ok) throw new Error('Network Error');
      const data: PokemonDBProps[] =
        (await response.json()) as PokemonDBProps[];
      return data.length === 0 ? undefined : data[0];
    } catch (error: unknown) {
      const data = (error as Error).message;
      throw new Error(data);
    }
  },
});

export const searchDetailIndex = atom({
  key: 'searchDetailIndex',
  default: -1,
});
