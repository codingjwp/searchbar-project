import { useRecoilState } from "recoil";
import SearchBar from "../components/SearchBar";
import styles from "./searchHome.module.scss";
import { PokemonListProps, searchListState } from "../apis/recoilState";
import { ChangeEvent } from "react";

const randomIndex = Math.floor(Math.random() * 3);

const SearchHome = () => {
  const [listState, setListState] = useRecoilState(searchListState);
  const homeClass = [
    `${styles.pokeball}`,
    `${styles.superball}`,
    `${styles.ultraball}`,
  ];

  const searchBarChangeOfText = (e: ChangeEvent) => {
    e.preventDefault();
    const searchText = (e.target as HTMLInputElement).value;
    setListState(searchText);
  };

  return (
    <div className={`${styles.searchHomeWrapper} ${homeClass[randomIndex]}`}>
      <div
        className={
          randomIndex === 1
            ? `${styles.superBallBar} ${styles.leftBar}`
            : randomIndex === 2
            ? `${styles.urltraBallBar} ${styles.leftBar}`
            : `${styles.barHidden}`
        }
      />
      <div
        className={
          randomIndex === 1
            ? `${styles.superBallBar} ${styles.rightBar}`
            : randomIndex === 2
            ? `${styles.urltraBallBar} ${styles.rightBar}`
            : `${styles.barHidden}`
        }
      />
      <SearchBar
        name="pokemon-search"
        onChange={searchBarChangeOfText}
        data={listState as PokemonListProps[]}
      />
    </div>
  );
};

export default SearchHome;
