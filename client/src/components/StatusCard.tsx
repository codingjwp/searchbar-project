import styles from "./statusCard.module.scss";

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
  return (
    <div className={styles.statusCard}>
      {type1}, {type2}, {hp}, {attack}, {defense}, {spattack}, {spdefense},{" "}
      {speed}
    </div>
  );
};

export default StatusCard;
