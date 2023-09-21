import styles from './listSkeleton.module.scss';

const ListSkeleton = () => {
  return (
    <div className={styles.searchSkeletonDetail}>
      <ul className={styles.skeletonDetailCover}>
        <li className={styles.skeletonDetailBox}>
          <div className={styles.skeletonDetailText}></div>
        </li>
      </ul>
    </div>
  );
};
export default ListSkeleton;
