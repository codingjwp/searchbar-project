import { MouseEvent, forwardRef } from 'react';
import styles from './searchBar.module.scss';

interface SearchBarProps {
  name: string;
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(({name}, ref) => {

  const emptyValueForcus = (e: MouseEvent) => {
    console.log("testsssssssssss");
  }

return (
  <div className={styles.searchBar}>
    <label className={styles.searchLabel} htmlFor={name}>Search</label>
    <input className={styles.searchInput} ref={ref} id={name} type='search' name={name} pattern='.*\S.*' required={false} />
    <button className={styles.searchBtn} type="button" onClick={emptyValueForcus} title={name} name={name}>
      <span className={styles.searchBtnSpan}>Search</span>
    </button>
  </div>
)


});
export default SearchBar;



