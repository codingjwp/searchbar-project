import styles from './listSkeleton.module.scss';

const ListSkeleton = () => {
  return (
    <div className={styles.skeleton_detail}>
      <ul className={styles.skeleton_cover}>
        <li className={styles.skeleton_detail_box}>
          <div className={styles.skeleton_text}></div>
        </li>
      </ul>
    </div>
  );
};
export default ListSkeleton;
