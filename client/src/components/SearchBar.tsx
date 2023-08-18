import { ChangeEvent, FormEvent, FocusEvent, forwardRef } from 'react';
import styles from './searchBar.module.scss';

interface SearchBarProps {
  name: string;
  onChnage?: (e: ChangeEvent) => void;
  onFocus?: (e: FocusEvent) => void;
  onBlur?: (e: FocusEvent) => void;
  onInvalid?: (e: FormEvent) => void;
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(({name, onChnage, onFocus, onBlur, onInvalid}, ref) => {

  return (
    <form className={styles.searchBar} onSubmit={(e)=>{e?.preventDefault()}}>
      <label className={styles.searchLabel} htmlFor={name} autoFocus={false}>Search</label>
      <input className={styles.searchInput} ref={ref} id={name} type='search' name={name} pattern='.*\S.*' required onChange={onChnage} onFocus={onFocus} onBlur={onBlur} onInvalid={onInvalid} />
      <button className={styles.searchBtn} type="submit" title={name} name={name}>
        <span className={styles.searchBtnSpan}>Search</span>
      </button>
    </form>
  )

});
export default SearchBar;


