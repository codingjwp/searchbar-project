import {
  useState,
  ChangeEvent,
  MouseEvent,
  useRef,
  KeyboardEvent,
  Suspense,
} from 'react';
import {useNavigate} from 'react-router-dom';
import {useResetRecoilState, useRecoilState} from 'recoil';
import {searchDetailIndex} from '../apis/recoilState';
import cn from 'classnames';
import styles from './searchBar.module.scss';
import SearchDetail from './SearchDetail';
import ListSkeleton from './ListSkeleton';

interface SearchBarProps {
  name: string;
}

const SearchBar = ({name}: SearchBarProps) => {
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);
  const textRef = useRef<HTMLInputElement | null>(null);
  const [searchText, setSearchText] = useState('');
  const resetIndex = useResetRecoilState(searchDetailIndex);
  const [detailIndex, setDetailIndex] = useRecoilState(searchDetailIndex);

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
    if (
      (li && li.title === 'no-search') ||
      (li && li.innerText.indexOf(textRef.current?.value as string) < 0)
    )
      return;
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

  const searchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value ?? '');
    resetIndex();
  };

  return (
    <div className={cn(styles.search, {[styles.bar_focus]: isFocused})}>
      <div className={styles.cover}>
        <input
          aria-label='search-input'
          name={name}
          ref={textRef}
          type='search'
          pattern='.*\S.*'
          required={true}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(textRef.current?.value !== '')}
          onChange={searchTextChange}
          value={searchText}
          onKeyDown={hasSearchDetailIndex}
          autoComplete='off'
        />
        <button
          className={cn(styles.btn_search, {
            [styles.btn_focus]: isFocused,
          })}
          title={name}
          name={name}
          type='submit'
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(textRef.current?.value !== '')}
          onClick={movePokemonDb}>
          <span className={styles.hidden_text}>Search</span>
        </button>
      </div>
      <Suspense fallback={<ListSkeleton />}>
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
