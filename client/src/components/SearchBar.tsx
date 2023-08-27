import { forwardRef, FocusEvent, useState, ChangeEvent, Suspense } from "react";
import styles from "./searchBar.module.scss";
import { useSetRecoilState } from "recoil";
import { searchTextState } from "../apis/recoilState";
import SearchDetail from "./SearchDetail";

interface SearchBarProps {
  name: string;
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ name }, ref) => {
    const [hasFocus, setHasFocus] = useState(false);
    const setTextState = useSetRecoilState(searchTextState);
    const searchTextChange = (e: ChangeEvent) => {
      const text = (e.target as HTMLInputElement).value ?? "";
      setTextState(text);
    };
    const isFocusTrue = () => {
      if (hasFocus === false) setHasFocus(true);
    };
    const isFocusFalse = (e: FocusEvent) => {
      const checkValue = (e.target as HTMLInputElement).value ?? "";
      if (checkValue === "") setHasFocus(false);
      else setHasFocus(true);
    };

    return (
      <div
        className={`${styles.searchBar} ${
          hasFocus ? styles.searchBarFocus : ""
        }`}
      >
        <div className={styles.searchBarCover}>
          <input
            className={styles.searchBarInput}
            aria-label="search-input"
            name={name}
            ref={ref}
            type="search"
            pattern=".*\S.*"
            required={true}
            onFocus={isFocusTrue}
            onBlur={isFocusFalse}
            onChange={searchTextChange}
          />
          <button
            className={`${styles.searchBarBtn} ${
              hasFocus === false ? styles.searchBarBtnFocuse : ""
            }`}
            title={name}
            name={name}
            type="submit"
            onFocus={isFocusTrue}
          >
            <span className={styles.searchBarSpan}>Search</span>
          </button>
        </div>
        <Suspense>
          <SearchDetail hasFocus={hasFocus} />
        </Suspense>
      </div>
    );
  },
);
export default SearchBar;
