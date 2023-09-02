import { SyntheticEvent } from "react";
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
  type1: string;
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
  type1,
}: MainCardProps) => {
  const formList = [form1, form2, form3, form4, form5];

  return (
    <div className={`${styles.mainCard} `}>
      <div
        className={`${styles.mainCardContainer} ${getTypeStyle(
          type1.toLowerCase(),
        )}`}
      >
        <div className={styles.mainCardImgCover}>
          <img
            className={styles.mainCardImg}
            src={`${import.meta.env.VITE_API_IMG}${imgname}`}
            alt={enname}
            onError={(e: SyntheticEvent<HTMLImageElement>) =>
              (e.currentTarget.src = "/src/assets/default.avif")
            }
          />
        </div>
        <span className={`${styles.mainCardTitle} ${styles.titleMarginTop}`}>
          #{number}
        </span>
        <span className={`${styles.mainCardTitle} ${styles.titleMarginMiddle}`}>
          {krname}
        </span>
        <span>{enname}</span>
        <div
          className={formList.length === 0 ? styles.hidden : styles.formCover}
        >
          {formList.length !== 0 &&
            formList.map((item) => {
              if (item !== "")
                return (
                  <span key={item} className={styles.formSpan}>
                    {item}
                  </span>
                );
            })}
        </div>
        <span className={styles.hidden}>
          {id}
          {type1}
        </span>
      </div>
    </div>
  );
};

function getTypeStyle(type: string) {
  switch (type) {
    case "bug":
      return `${styles.bugType}`;
    case "dark":
      return `${styles.darkType}`;
    case "dragon":
      return `${styles.dragonType}`;
    case "electric":
      return `${styles.electricType}`;
    case "fighting":
      return `${styles.fightingType}`;
    case "fairy":
      return `${styles.fairyType}`;
    case "flying":
      return `${styles.flyingType}`;
    case "fire":
      return `${styles.fireType}`;
    case "grass":
      return `${styles.grassType}`;
    case "ghost":
      return `${styles.ghostType}`;
    case "ground":
      return `${styles.groundType}`;
    case "ice":
      return `${styles.iceType}`;
    case "normal":
      return `${styles.normalType}`;
    case "poison":
      return `${styles.poisonType}`;
    case "psychic":
      return `${styles.psychicType}`;
    case "rock":
      return `${styles.rockType}`;
    case "steel":
      return `${styles.steelType}`;
    case "water":
      return `${styles.waterType}`;
    default:
      return "";
  }
}

export default MainCard;
