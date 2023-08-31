import { useEffect, useRef } from "react";
import styles from "./statusCard.module.scss";
import { getTypeStyle } from "./MainCard";
import { Chart, registerables, ChartConfiguration, ChartItem } from "chart.js";

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
        type: "doughnut",
        data: {
          labels: ["Hp", "Attack", "Defense", "Spattack", "Spdefense", "speed"],
          datasets: [
            {
              label: "status",
              data: status.map(Number),
              backgroundColor: [
                "#d2381d",
                "#2b7fd3",
                "#d1a72a",
                "#5da042",
                "#8b457d",
                "#d2477f",
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
        className={`${styles.statusCardContainer} ${getTypeStyle(
          type1.toLowerCase(),
        )}`}
      >
        <canvas ref={canvasRef} />
        <div className={styles.statusCardImgCover}>
          <img
            className={`${styles.statusCardTypeImg} ${
              type2 !== "" ? styles.statusMarginRight : ""
            }`}
            src={`${import.meta.env.VITE_API_TYPE}${type1}.png`}
            alt={type1}
          />
          {type2 !== "" ? (
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

export default StatusCard;
