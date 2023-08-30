import styles from "./mainCard.module.scss";

interface MainCardProps {
  id: string;
  number: string;
  enname: string;
  krname: string;
  form1: string;
  form2: string;
  form3: string;
  form4: string;
  form5: string;
  imgname: string;
}

const MainCard = ({
  id,
  number,
  enname,
  krname,
  form1,
  form2,
  form3,
  form4,
  form5,
  imgname,
}: MainCardProps) => {
  return (
    <div className={styles.mainCard}>
      <img
        className={styles.mainCardImg}
        src={`${import.meta.env.VITE_API_IMG}${imgname}`}
        alt={enname}
      />
      <span className={`${styles.mainCardTitle}`}>#{number}</span>
      <span className={`${styles.mainCardTitle}`}>{krname}</span>
      <span>{enname}</span>
      <span className={styles.hidden}>
        {id}
        {form1}
        {form2}
        {form3}
        {form4}
        {form5}
      </span>
    </div>
  );
};

export default MainCard;
