import { useRecoilValue } from "recoil";
import styles from "./searchDetail.module.scss";
import { searchListState } from "../apis/recoilState";

interface searchDetailProps {
  hasFocus: boolean;
}

const SearchDetail = ({ hasFocus }: searchDetailProps) => {
  const data = useRecoilValue(searchListState);
  return (
    <div className={hasFocus ? styles.searchBarDetail : styles.hidden}>
      {data?.length !== 0 ? (
        data.map((item) => {
          return (
            <div className={styles.searchBarDetailBox} key={item.id}>
              {item.krname}
              <sub>{`(${item.enname})`}</sub>
            </div>
          );
        })
      ) : (
        <div className={styles.searchBarDetailBox}>
          검색어가 존재하지 않습니다.
        </div>
      )}
    </div>
  );
};

export default SearchDetail;
