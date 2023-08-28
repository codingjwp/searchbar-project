import styles from "./searchHome.module.scss";
import SearchBar from "../components/SearchBar";

const randomIndex = Math.floor(Math.random() * 3);

const SearchHome = () => {
  const homeClass = [
    `${styles.pokeball}`,
    `${styles.superball}`,
    `${styles.ultraball}`,
  ];

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
      <SearchBar name="pokemon-search-bar" />
    </div>
  );
};

export default SearchHome;
