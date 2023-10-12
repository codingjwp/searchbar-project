import cn from 'classnames';
import styles from './statusProgress.module.scss';

interface StatusProps {
  label: string;
  value: string;
}

const StatusProgress = ({ label, value }: StatusProps) => {
  const test = cn(styles.progress_status, {
    [styles.fifty_under]: Number(value) < 50,
    [styles.eighty_under]: Number(value) >= 50 && Number(value) < 80,
    [styles.hundred_under]: Number(value) >= 80 && Number(value) < 100,
    [styles.hundred_more]: Number(value) >= 100,
  });

  return (
    <div className={styles.progress_cover}>
      <em className={styles.progress_title}>{label} : </em>
      <div className={styles.progress_main}>
        <progress
          aria-label={label}
          className={test}
          value={value}
          max={'250'}></progress>
        <span className={styles.progress_value}>{value}</span>
      </div>
    </div>
  );
};

export default StatusProgress;
