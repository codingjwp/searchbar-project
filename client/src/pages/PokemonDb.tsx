import { useParams } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { searchTextState, pokemonDB } from "../apis/recoilState";
import { useEffect } from "react";
import styles from "./pokemonDb.module.scss";
import MainCard from "../components/MainCard";
import StatusCard from "../components/StatusCard";

const PokemonDb = () => {
  const { id } = useParams();
  const setIdState = useSetRecoilState(searchTextState);
  const data = useRecoilValue(pokemonDB);

  useEffect(() => {
    if (id) setIdState(id);
  }, []);

  return (
    <div className={styles.pokemonDbWrapper}>
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
