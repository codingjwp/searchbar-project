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
  useChart(hp, attack, defense, spattack, spdefense, speed, canvasRef);

  return (
    <div className={styles.statusCard}>
      <div
        className={cn(
          styles.statusCardContainer,
          getTypeStyle(type1.toLowerCase()),
        )}>
        <canvas ref={canvasRef} />
        <div className={styles.statusCardImgCover}>
          <img
            className={cn(styles.statusCardTypeImg, {
              [styles.statusMarginRight]: type2 !== '',
            })}
            src={`${import.meta.env.VITE_API_TYPE}${type1}.png`}
            alt={type1}
          />
          {type2 !== '' ? (
            <img
              className={styles.statusCardTypeImg}
              src={`${import.meta.env.VITE_API_TYPE}${type2}.png`}
              alt={type2}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

function getTypeStyle(type: string) {
  switch (type) {
    case 'bug':
      return `${styles.bugType}`;
    case 'dark':
      return `${styles.darkType}`;
    case 'dragon':
      return `${styles.dragonType}`;
    case 'electric':
      return `${styles.electricType}`;
    case 'fighting':
      return `${styles.fightingType}`;
    case 'fairy':
      return `${styles.fairyType}`;
    case 'flying':
      return `${styles.flyingType}`;
    case 'fire':
      return `${styles.fireType}`;
    case 'grass':
      return `${styles.grassType}`;
    case 'ghost':
      return `${styles.ghostType}`;
    case 'ground':
      return `${styles.groundType}`;
    case 'ice':
      return `${styles.iceType}`;
    case 'normal':
      return `${styles.normalType}`;
    case 'poison':
      return `${styles.poisonType}`;
    case 'psychic':
      return `${styles.psychicType}`;
    case 'rock':
      return `${styles.rockType}`;
    case 'steel':
      return `${styles.steelType}`;
    case 'water':
      return `${styles.waterType}`;
    default:
      return '';
  }
}

export default StatusCard;
