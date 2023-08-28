import { useState, ChangeEvent, Suspense, useRef, KeyboardEvent } from "react";
import styles from "./searchBar.module.scss";
import { useRecoilState } from "recoil";
import { searchDetailIndex, searchTextState } from "../apis/recoilState";
import SearchDetail from "./SearchDetail";

interface SearchBarProps {
  name: string;
}

const SearchBar = ({ name }: SearchBarProps) => {
  const [hasFocus, setHasFocus] = useState(false);
  const textRef = useRef<HTMLInputElement | null>(null);
  const [textState, setTextState] = useRecoilState(searchTextState);
  const [detailIndex, setDetailIndex] = useRecoilState(searchDetailIndex);
  const searchTextChange = (e: ChangeEvent) => {
    const text = (e.target as HTMLInputElement).value ?? "";
    setTextState(text);
  };
  const isFocusTrue = () => {
    if (hasFocus === false) {
      setHasFocus(true);
    }
  };
  const isFocusFalse = () => {
    const checkValue = textRef.current?.value ?? "";
    checkValue === "" ? setHasFocus(false) : setHasFocus(true);
  };
  const hasSearchDetailIndex = (e: KeyboardEvent) => {
    if (!(e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "Enter"))
      return;
    if (e.key === "ArrowUp" && detailIndex > 0) {
      setDetailIndex((prev) => prev - 1);
    } else if (e.key === "ArrowDown" && detailIndex < 4) {
      setDetailIndex((prev) => prev + 1);
    } else if (e.key === "Enter") {
      const li = document.querySelectorAll("li");
      if (li && li.item(0).title === "no-search") return;
      if (li && li.item(detailIndex)) {
        setTextState(li.item(detailIndex).innerText.split("(")[0]);
        setDetailIndex(-1);
      }
    }
  };

  return (
    <div
      className={`${styles.searchBar} ${hasFocus ? styles.searchBarFocus : ""}`}
    >
      <div className={styles.searchBarCover}>
        <input
          className={styles.searchBarInput}
          aria-label="search-input"
          name={name}
          ref={textRef}
          type="search"
          pattern=".*\S.*"
          required={true}
          onFocus={isFocusTrue}
          onBlur={isFocusFalse}
          onChange={searchTextChange}
          value={textState}
          onKeyDown={hasSearchDetailIndex}
        />
        <button
          className={`${styles.searchBarBtn} ${
            hasFocus === false ? styles.searchBarBtnFocuse : ""
          }`}
          title={name}
          name={name}
          type="submit"
          onFocus={isFocusTrue}
          onBlur={isFocusFalse}
        >
          <span className={styles.searchBarSpan}>Search</span>
        </button>
      </div>
      <Suspense>
        <SearchDetail hasFocus={hasFocus} />
      </Suspense>
    </div>
  );
};
export default SearchBar;
