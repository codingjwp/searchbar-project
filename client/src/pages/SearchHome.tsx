import styles from './searchHome.module.scss';
import SearchBar from '../components/SearchBar';
import cn from 'classnames';

const randomIndex = Math.floor(Math.random() * 3);

const styleChangeForm = () => {
  const searchWrap = cn(styles.search_wrap, {
    [styles.base_ball]: randomIndex === 0,
    [styles.captain_ball]: randomIndex === 1,
    [styles.ultra_ball]: randomIndex === 2,
  });
  const leftBar = cn({
    'hide': randomIndex !== 2,
    [styles.bar_group]: randomIndex === 2,
    [styles.left_bar]: randomIndex === 2,
  });
  const rightBar = cn({
    'hide': randomIndex !== 2,
    [styles.bar_group]: randomIndex === 2,
    [styles.right_bar]: randomIndex === 2,
  });
  return [searchWrap, leftBar, rightBar];
}

const SearchHome = () => {
  const [searchWrap, leftBar, rightBar] = styleChangeForm();

  return (
    <div className={searchWrap}>
      <div className={leftBar} />
      <div className={rightBar} />
      <SearchBar name='pokemon-search-bar' />
    </div>
  );
};

export default SearchHome;
