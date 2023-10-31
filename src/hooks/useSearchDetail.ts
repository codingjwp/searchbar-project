import {useQuery} from 'react-query';

type StateObject = {
  hp: string;
  attack: string;
  defense: string;
  spattack: string;
  spdefense: string;
  speed: string;
}

type PokemonProps = {
  id: string;
  enname: string;
  krname: string;
  form: string[];
  type: string[];
  state : StateObject
  imgname: string;
}

const searchPokemonDb = async (id: string) => {
  try {
    if (id === '') return undefined;
    const response = await fetch(`${import.meta.env.VITE_API_DB}${id}`);
    if (!response.ok) throw new Error('Network Error');
    const data = (await response.json()) as PokemonProps[];
    return data.length === 0 ? undefined : data[0];
  } catch (error: unknown) {
    const data = (error as Error).message;
    throw new Error('There was a problem with the fetch operation: ' + data);
  }
};

export const useSearchDetail = (init: string) => {
  return useQuery({
    queryKey: ['searchPokemonDb', init],
    queryFn: () => searchPokemonDb(init),
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
    useErrorBoundary: true,
  });
};
