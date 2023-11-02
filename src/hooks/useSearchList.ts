import {useQuery} from 'react-query';
import {useEffect, useRef, useState} from 'react';

type PokemonList = {
  id: string;
  searchcontent: string;
  searchterm: string;
}

const searchListFn = async (name: string) => {
  try {
    const pokemonName = name.replace(/['+-_: ]+/g, '').toLowerCase();
    if (pokemonName === '') return [];
    const response = await fetch(`${import.meta.env.VITE_SEARCH_CONTENT}${pokemonName}`);
    if (!response.ok) throw new Error('Network Error');

    const data = (await response.json()) as PokemonList[];
    if (!data) throw new Error('Not Found Error');
    return data;
  } catch (error: unknown) {
    const data = (error as Error).message;
    throw new Error(data);
  }
};

const useDebounce = (value: string, delay: number) => {
  const timer = useRef<number | null>(null);
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    timer.current = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [value, delay]);
  return debounceValue;
};

export const useSearchList = (init: string) => {
  const debounceValue = useDebounce(init, 300);

  return useQuery({
    queryKey: ['pokemonlist', debounceValue],
    queryFn: () => searchListFn(debounceValue),
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
    useErrorBoundary: true,
  });
};
