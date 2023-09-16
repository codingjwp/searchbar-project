import { useRecoilValue } from 'recoil';
import styles from './searchDetail.module.scss';
import { searchListState } from '../apis/recoilState';
import { MouseEvent } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import cn from 'classnames';

interface searchDetailProps {
  isFocused: boolean;
  pokemonName: string;
  detailIndex: number;
  touchDetail?: (e: MouseEvent) => void;
}

const SearchDetail = ({
  isFocused,
  pokemonName,
  detailIndex,
  touchDetail,
}: searchDetailProps) => {
  const name = useDebounce(pokemonName, 300);
  const data = useRecoilValue(searchListState(name));

  return (
    <div
      className={cn({
        [styles.searchBarDetail]: isFocused,
        [styles.hidden]: !isFocused,
      })}
      onClick={touchDetail}>
      <ul className={styles.searchBarDetailCover}>
        {data?.length !== 0 ? (
          data.map((item, index) => {
            return (
              <li
                className={cn(styles.searchBarDetailBox, {
                  [styles.indexCheck]: detailIndex === index,
                })}
                key={item.id}
                id={item.id}
                aria-label={item.krname}>
                {item.krname}
                <sub>{`(${item.enname})`}</sub>
              </li>
            );
          })
        ) : (
          <li title='no-search' className={styles.searchBarDetailBox}>
            검색어가 존재하지 않습니다.
          </li>
        )}
      </ul>
    </div>
  );
};

export default SearchDetail;
