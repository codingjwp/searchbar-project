import { useEffect, useRef } from 'react';
import styles from './statusCard.module.scss';
import { Chart, registerables, ChartConfiguration, ChartItem } from 'chart.js';
import cn from 'classnames';

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

  useEffect(() => {
    if (canvasRef) {
      const canvas = canvasRef.current as ChartItem;
      const status = [hp, attack, defense, spattack, spdefense, speed];
      const data: ChartConfiguration = {
        type: 'doughnut',
        data: {
          labels: ['Hp', 'Attack', 'Defense', 'Spattack', 'Spdefense', 'Speed'],
          datasets: [
            {
              label: 'status',
              data: status.map(Number),
              backgroundColor: [
                '#d2381d',
                '#2b7fd3',
                '#d1a72a',
                '#5da042',
                '#8b457d',
                '#d2477f',
              ],
              hoverOffset: 30,
            },
          ],
        },
        options: {
          responsive: true,
          layout: {
            padding: {
              left: 20,
              right: 20,
              top: 20,
              bottom: 20,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: true,
            },
          },
        },
      };
      const chart = new Chart(canvas, data);
      return () => chart.destroy();
    }
  }, []);

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
