import styles from './statusCard.module.scss';
import cn from 'classnames';
import StatusProgress from './StatusProgress';

type StateObject = {
  hp: string;
  attack: string;
  defense: string;
  spattack: string;
  spdefense: string;
  speed: string;
}


type StatusCardProps = {
  type: string[];
  state: StateObject;
}

const StatusCard = ({
  type,
  state,
}: StatusCardProps) => {
  return (
    <div
      className={cn(
        styles.status_card_wrap,
        getTypeStyle(type[0].toLowerCase()),
      )}>
      <div className={styles.inner}>
        <strong className={styles.staus_card_title}>포켓몬 능력치 : </strong>
        <StatusProgress label='Hp' value={state.hp} />
        <StatusProgress label='Speed' value={state.speed} />
        <StatusProgress label='Attack' value={state.attack} />
        <StatusProgress label='Defense' value={state.defense} />
        <StatusProgress label='Spattack' value={state.spattack} />
        <StatusProgress label='Spdefense' value={state.spdefense} />
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
