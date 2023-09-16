import { useParams, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { pokemonDB } from "../apis/recoilState";
import svg from "../assets/logout.svg";
import styles from "./pokemonDb.module.scss";
import MainCard from "../components/MainCard";
import StatusCard from "../components/StatusCard";

const PokemonDb = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = useRecoilValue(pokemonDB(id ?? ''));
  const handelLogout = () => {
    navigate("/");
  };

  return (
    <div className={styles.pokemonDbWrapper}>
      <div className={styles.pokemonDbHeader}>
        <svg width={24} height={24} viewBox="0 0 24 24" onClick={handelLogout}>
          <use href={`${svg}#logout`} />
        </svg>
      </div>
      {data && (
        <div className={styles.pokemonDbContainer}>
          <MainCard
            id={data.id}
            number={data.number}
            enname={data.enname}
            krname={data.krname}
            form1={data.form1}
            form2={data.form2}
            form3={data.form3}
            form4={data.form4}
            form5={data.form5}
            imgname={data.imgname}
            type1={data.type1}
          />
          <StatusCard
            type1={data.type1}
            type2={data.type2}
            hp={data.hp}
            attack={data.attack}
            defense={data.defense}
            spattack={data.spattack}
            spdefense={data.spdefense}
            speed={data.speed}
          />
        </div>
      )}
    </div>
  );
};

export default PokemonDb;
