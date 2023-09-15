import { useRecoilValue, useSetRecoilState } from "recoil";
import styles from "./searchDetail.module.scss";
import { searchListState, searchDetailIndex } from "../apis/recoilState";
import { useEffect, MouseEvent } from "react";
import cn from "classnames";

interface searchDetailProps {
  isFocused: boolean;
  detailIndex: number;
  touchDetail?: (e: MouseEvent) => void;
}

const SearchDetail = ({
  isFocused,
  detailIndex,
  touchDetail,
}: searchDetailProps) => {
  const data = useRecoilValue(searchListState);
  const setDetailIndex = useSetRecoilState(searchDetailIndex);

  useEffect(() => {
    if (data.length <= detailIndex) {
      setDetailIndex((prev) => prev - 1);
    }
  }, [detailIndex]);

  return (
    <div
      className={cn({
        [styles.searchBarDetail]: isFocused,
        [styles.hidden]: !isFocused,
      })}
      onClick={touchDetail}
    >
      <ul className={styles.searchBarDetailCover}>
        {data?.length !== 0 ? (
          data.map((item, index) => {
            return (
              <li
                className={cn(styles.searchBarDetailBox, {
                  [styles.indexCheck]: detailIndex === index,
                })}
                key={item.id}
                aria-label={item.id}
              >
                {item.krname}
                <sub>{`(${item.enname})`}</sub>
              </li>
            );
          })
        ) : (
          <li title="no-search" className={styles.searchBarDetailBox}>
            검색어가 존재하지 않습니다.
          </li>
        )}
      </ul>
    </div>
  );
};

export default SearchDetail;
