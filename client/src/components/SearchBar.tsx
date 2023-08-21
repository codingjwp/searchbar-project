import { forwardRef, FocusEvent, useState } from 'react';
import styles from './searchBar.module.scss';

interface SearchBarProps {
  name: string;
  data?: {
    id: string;
    name: string;
    krname: string;
  }[]
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(({name, data}, ref) => {
  const [hasFocus, setHasFocus] = useState(false);

  const isFocusTrue = () => {
    if (hasFocus === false)
      setHasFocus(true);
  }
  const isFocusFalse = (e: FocusEvent) => {
    const checkValue = (e.target as HTMLInputElement).value ?? "";
    if (checkValue === "")
      setHasFocus(false);
    else 
      setHasFocus(true);
  }

  return (
    <div className={`${styles.searchBar} ${hasFocus ? styles.searchBarFocus : ''}`}>
      <div className={styles.searchBarCover}>
        <input className={styles.searchBarInput} aria-label='search-input' name={name} ref={ref} type='search' pattern='.*\S.*' required={true} onFocus={isFocusTrue} onBlur={isFocusFalse} />
        <button className={`${styles.searchBarBtn} ${hasFocus === false ? styles.searchBarBtnFocuse : ''}`} title={name} name={name} type='submit' onFocus={isFocusTrue}>
          <span className={styles.searchBarSpan}>Search</span>
        </button>
      </div>
      <div className={styles.searchBarDetail}>
        {data ? data.map((item) => {
          return <div className={styles.searchBarDetailBox} key={item.id}>{item.krname}<sub>item.name</sub></div>
        }) : <div className={styles.searchBarDetailBox}>검색어가 존재하지 않습니다.</div>}
      </div>
    </div>
  )
});
export default SearchBar;



