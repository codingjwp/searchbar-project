import styles from "./searchHome.module.scss";
import SearchBar from "../components/SearchBar";
import cn from "classnames";

const randomIndex = Math.floor(Math.random() * 3);

const SearchHome = () => {
  const ballDesign = (randomIndex: number, checkNum: number) => {
    if (randomIndex === checkNum) return true;
    return false;
  };
  const searchHomeWrapper = cn(styles.searchHomeWrapper, {
    [styles.pokeball]: ballDesign(randomIndex, 0),
    [styles.superball]: ballDesign(randomIndex, 1),
    [styles.ultraball]: ballDesign(randomIndex, 2),
  });
  const barLeftDesign = cn({
    [styles.barHidden]: ballDesign(randomIndex, 0),
    [styles.superBallBar]: ballDesign(randomIndex, 1),
    [styles.urltraBallBar]: ballDesign(randomIndex, 2),
    [styles.leftBar]: ballDesign(randomIndex, 1) || ballDesign(randomIndex, 2),
  });
  const barRightDesign = cn({
    [styles.barHidden]: ballDesign(randomIndex, 0),
    [styles.superBallBar]: ballDesign(randomIndex, 1),
    [styles.urltraBallBar]: ballDesign(randomIndex, 2),
    [styles.rightBar]: ballDesign(randomIndex, 1) || ballDesign(randomIndex, 2),
  });

  return (
    <div className={searchHomeWrapper}>
      <div className={barLeftDesign} />
      <div className={barRightDesign} />
      <SearchBar name="pokemon-search-bar" />
    </div>
  );
};

export default SearchHome;
