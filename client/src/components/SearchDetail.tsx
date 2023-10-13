import {MouseEvent} from 'react';
import styles from './searchDetail.module.scss';
import cn from 'classnames';
import {useSearchList} from '../hooks/useSearchList';

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
  const {data = []} = useSearchList(pokemonName);
  return (
    <div
      className={cn({[styles.search_detail]: isFocused, hide: !isFocused})}
      onClick={touchDetail}>
      <ul className={styles.inner}>
        {data?.length !== 0 ? (
          data.map((item, index) => {
            return (
              <li
                className={cn({
                  [styles.index_bgcolor]: detailIndex === index,
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
          <li title='no-search'>검색어가 존재하지 않습니다.</li>
        )}
      </ul>
    </div>
  );
};

export default SearchDetail;
