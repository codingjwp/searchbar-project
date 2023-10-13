import {
  SyntheticEvent,
  useRef,
  MouseEvent,
  TouchEvent,
  useState,
} from 'react';
import styles from './mainCard.module.scss';
import cn from 'classnames';

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
  type2: string;
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
  type2,
}: MainCardProps) => {
  const [imgSrc, setImgSrc] = useState(
    `${import.meta.env.VITE_API_IMG}${imgname}`,
  );
  const formList = [form1, form2, form3, form4, form5];
  const imgRef = useRef<HTMLImageElement | null>(null);
  const handleOverFormImg = (e: MouseEvent | TouchEvent) => {
    if (e.type === 'mouseover') {
      if (e.target === e.currentTarget) return;
      const form = (e.target as HTMLSpanElement).innerText
        .replace(/'|\+|-|_|\s+/g, '')
        .toLowerCase();
      if (imgRef && imgRef.current)
        setImgSrc(`${import.meta.env.VITE_API_FORM}${number}-${form}.webp`);
    } else if (e.type === 'mouseleave') {
      setImgSrc(`${import.meta.env.VITE_API_IMG}${imgname}`);
    }
  };

  return (
    <div
      className={cn(styles.main_card_wrap, getTypeStyle(type1.toLowerCase()))}>
      <div className={styles.inner}>
        <div className={styles.img_cover}>
          <img
            ref={imgRef}
            src={imgSrc}
            alt={enname}
            onError={(e: SyntheticEvent<HTMLImageElement>) =>
              (e.currentTarget.src = '/src/assets/default.avif')
            }
          />
          <div className={styles.type_group}>
            <div
              aria-label={type1}
              role='image'
              className={cn(
                styles.spr_type_icon,
                styles.type_img,
                `${styles[type1.toLowerCase()]}`,
              )}>
              <span className={styles.hidden_text}>{type1}</span>
            </div>
            {type2 !== '' ? (
              <div
                aria-label={type2}
                role='image'
                className={cn(
                  styles.spr_type_icon,
                  styles.type_img,
                  `${styles[type2.toLowerCase()]}`,
                )}>
                <span className={styles.hidden_text}>{type2}</span>
              </div>
            ) : null}
          </div>
        </div>
        <div className={styles.info}>
          <em className={styles.card_title}>#{number}</em>
          <em className={styles.card_title}>{krname}</em>
          <em className={styles.card_sub_title}>{enname}</em>
          <div
            className={cn({
              hide: formList.length === 0,
              [styles.form_cover]: formList.length !== 0,
            })}
            onMouseOver={handleOverFormImg}
            onMouseLeave={handleOverFormImg}>
            {formList.length !== 0 &&
              formList.map((item) => {
                if (item !== '')
                  return (
                    <span key={item} className={styles.form_text}>
                      {item}
                    </span>
                  );
              })}
          </div>
          <span className={styles.hidden_text}>{id}</span>
        </div>
        <div className={styles.description}>
          <em className={styles.card_title}>포켓몬 도감 내용:</em>
          <p className={styles.entries}>
            2개의 굵은 덩굴을 휘둘러서 싸운다. 10층 빌딩을 가볍게 넘어뜨릴
            정도로 파워풀하다. 2개의 굵은 덩굴을 휘둘러서 싸운다. 10층 빌딩을
            가볍게 넘어뜨릴 정도로 파워풀하다. 2개의 굵은 덩굴을 휘둘러서
            싸운다. 10층 빌딩을 가볍게 넘어뜨릴 정도로 파워풀하다.
          </p>
        </div>
      </div>
    </div>
  );
};

function getTypeStyle(type: string) {
  switch (type) {
    case 'bug':
      return `${styles.bug_type}`;
    case 'dark':
      return `${styles.dark_type}`;
    case 'dragon':
      return `${styles.dragon_type}`;
    case 'electric':
      return `${styles.electric_type}`;
    case 'fighting':
      return `${styles.fighting_type}`;
    case 'fairy':
      return `${styles.fairy_type}`;
    case 'flying':
      return `${styles.flying_type}`;
    case 'fire':
      return `${styles.fire_type}`;
    case 'grass':
      return `${styles.grass_type}`;
    case 'ghost':
      return `${styles.ghost_type}`;
    case 'ground':
      return `${styles.ground_type}`;
    case 'ice':
      return `${styles.ice_type}`;
    case 'normal':
      return `${styles.normal_type}`;
    case 'poison':
      return `${styles.poison_type}`;
    case 'psychic':
      return `${styles.psychic_type}`;
    case 'rock':
      return `${styles.rock_type}`;
    case 'steel':
      return `${styles.steel_type}`;
    case 'water':
      return `${styles.water_type}`;
    default:
      return '';
  }
}

export default MainCard;
