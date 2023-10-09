import { useRef } from 'react';
import styles from './statusCard.module.scss';
import { Chart, registerables } from 'chart.js';
import cn from 'classnames';
import { useChart } from '../hooks/useChart';

interface StatusCardProps {
  type1: string;
  type2: string;
  hp: string;
  attack: string;
  defense: string;
  spattack: string;
  spdefense: string;
  speed: string;
}

const StatusCard = ({
  type1,
  type2,
  hp,
  attack,
  defense,
  spattack,
  spdefense,
  speed,
}: StatusCardProps) => {
  Chart.register(...registerables);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useChart([hp, attack, defense, spattack, spdefense, speed], canvasRef);

  return (
    <div className={cn(styles.status_card_wrap, getTypeStyle(type1.toLowerCase()))}>
      <div className={styles.inner}>
        <div className={styles.status_canvas}>
          <canvas ref={canvasRef} />
        </div>
        <div className={styles.info}>
          <span className={styles.status_text}>Hp : {hp}</span>
          <span className={styles.status_text}>Speed : {speed}</span>
          <span className={styles.status_text}>Attack : {attack}</span>
          <span className={styles.status_text}>Defense : {defense}</span>
          <span className={styles.status_text}>Spattack : {spattack}</span>
          <span className={cn(styles.status_text, styles.status_last_text)}>Spdefense : {spdefense}</span>
          <div className={styles.img_group}>
            <span className={cn(styles.status_text, styles.margin_right_add)}>Type: </span>
            <img
              className={cn(styles.type_img, styles.margin_right_add, {
                [styles.statusMarginRight]: type2 !== '',
              })}
              src={`${import.meta.env.VITE_API_TYPE}${type1}.png`}
              alt={type1}
            />
            {type2 !== '' ? (
              <img
                className={styles.type_img}
                src={`${import.meta.env.VITE_API_TYPE}${type2}.png`}
                alt={type2}
              />
            ) : null}
          </div>
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

export default StatusCard;
