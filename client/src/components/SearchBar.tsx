import {
  useState,
  ChangeEvent,
  MouseEvent,
  FocusEvent,
  Suspense,
  useRef,
  KeyboardEvent,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useResetRecoilState, useRecoilState } from 'recoil';
import { searchDetailIndex } from '../apis/recoilState';
import cn from 'classnames';
import styles from './searchBar.module.scss';
import SearchDetail from './SearchDetail';

interface SearchBarProps {
  name: string;
}

const SearchBar = ({ name }: SearchBarProps) => {
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);
  const textRef = useRef<HTMLInputElement | null>(null);
  const [searchText, setSearchText] = useState('');
  const resetIndex = useResetRecoilState(searchDetailIndex);
  const [detailIndex, setDetailIndex] = useRecoilState(searchDetailIndex);

  const searchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value ?? '');
    resetIndex();
  };
  const handleFocusChange = (e: FocusEvent) => {
    if (e.type === 'focus' && !isFocused) setIsFocused(true);
    else if (e.type === 'blur') setIsFocused(textRef.current?.value !== '');
  };
  const handleTouchOfClick = (e: MouseEvent) => {
    if ((e.target as HTMLElement).nodeName !== 'LI') return;
    const li = e.target as HTMLLIElement;
    if (li.title === 'no-search') return;
    setSearchText(li.innerText.split('(')[0]);
    textRef.current?.focus();
    resetIndex();
  };

  const movePokemonDb = () => {
    const li = document.querySelector('li');
    if (li && li.title === 'no-search') return;
    const id = li?.id;
    navigate(`/db/${id}`);
  };

  const hasSearchDetailIndex = (e: KeyboardEvent) => {
    if (
      !['ArrowUp', 'ArrowDown', 'Enter'].includes(e.key) ||
      e.nativeEvent.isComposing
    )
      return;

    if (e.key === 'ArrowUp' && detailIndex > 0) {
      setDetailIndex((prev) => (prev <= 0 ? prev : prev - 1));
    } else if (e.key === 'ArrowDown' && detailIndex < 4) {
      const length = document.querySelectorAll('li').length;
      setDetailIndex((prev) => (prev + 1 === length ? prev : prev + 1));
    } else if (e.key === 'Enter' && detailIndex !== -1) {
      const li = document.querySelectorAll('li');

      if (li && li.item(0).title === 'no-search') return;

      if (li && li.item(detailIndex)) {
        setSearchText(li.item(detailIndex).innerText.split('(')[0]);
        resetIndex();
      }
    } else if (e.key === 'Enter' && detailIndex === -1) {
      movePokemonDb();
    }
  };

  return (
    <div
      className={cn(styles.searchBar, { [styles.searchBarFocus]: isFocused })}>
      <div className={styles.searchBarCover}>
        <input
          className={styles.searchBarInput}
          aria-label='search-input'
          name={name}
          ref={textRef}
          type='search'
          pattern='.*\S.*'
          required={true}
          onFocus={handleFocusChange}
          onBlur={handleFocusChange}
          onChange={searchTextChange}
          value={searchText}
          onKeyDown={hasSearchDetailIndex}
          autoComplete='off'
        />
        <button
          className={cn(styles.searchBarBtn, {
            [styles.searchBarBtnFocuse]: !isFocused,
          })}
          title={name}
          name={name}
          type='submit'
          onFocus={handleFocusChange}
          onBlur={handleFocusChange}
          onClick={movePokemonDb}
          onTouchStart={movePokemonDb}>
          <span className={styles.searchBarSpan}>Search</span>
        </button>
      </div>
      <Suspense>
        <SearchDetail
          isFocused={isFocused}
          pokemonName={searchText}
          detailIndex={detailIndex}
          touchDetail={handleTouchOfClick}
        />
      </Suspense>
    </div>
  );
};
export default SearchBar;
