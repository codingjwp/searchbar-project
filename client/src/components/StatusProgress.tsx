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
      <progress className={test} value={value} max={'250'}>
        <span className={styles.hidden_text}>
          {label} : {value}
        </span>
      </progress>
    </div>
  );
};

export default StatusProgress;
