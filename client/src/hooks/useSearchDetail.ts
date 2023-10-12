import { useQuery } from 'react-query';

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

const searchPokemonDb = async (id: string) => {
  try {
    if (id === '') return undefined;
    const response = await fetch(`${import.meta.env.VITE_API_DB}${id}`);
    if (!response.ok) throw new Error('Network Error');
    const data: PokemonDBProps[] = (await response.json()) as PokemonDBProps[];
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
