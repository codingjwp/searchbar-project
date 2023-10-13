import {useQuery} from 'react-query';
import {useEffect, useRef, useState} from 'react';

interface PokemonListProps {
  id: string;
  enname: string;
  search: string;
  krname: string;
}

const searchListFn = async (name: string) => {
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
