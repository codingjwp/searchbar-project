import { useRecoilValue, useRecoilState } from "recoil";
import styles from "./searchDetail.module.scss";
import { searchListState, searchDetailIndex } from "../apis/recoilState";
import { useEffect, MouseEvent } from "react";

interface searchDetailProps {
  hasFocus: boolean;
  touchDetail?: (e: MouseEvent) => void;
}

const SearchDetail = ({ hasFocus, touchDetail }: searchDetailProps) => {
  const data = useRecoilValue(searchListState);
  const [detailIndex, setDetailIndex] = useRecoilState(searchDetailIndex);

  useEffect(() => {
    if (data.length <= detailIndex) {
      setDetailIndex((prev) => prev - 1);
    }
  }, [detailIndex]);

  return (
    <div
      className={hasFocus ? styles.searchBarDetail : styles.hidden}
      onClick={touchDetail}
    >
      <ul className={styles.searchBarDetailCover}>
        {data?.length !== 0 ? (
          data.map((item, index) => {
            return (
              <li
                className={`${styles.searchBarDetailBox} ${
                  detailIndex === index ? styles.indexCheck : ""
                }`}
                key={item.id}
                aria-label={item.id}
              >
                {item.krname}
                <sub>{`(${item.enname})`}</sub>
              </li>
            );
          })
        ) : (
          <li title={"no-search"} className={styles.searchBarDetailBox}>
            검색어가 존재하지 않습니다.
          </li>
        )}
      </ul>
    </div>
  );
};

export default SearchDetail;
