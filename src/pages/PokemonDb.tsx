import {useParams, useNavigate} from 'react-router-dom';
import cn from 'classnames';
import styles from './pokemonDb.module.scss';
import MainCard from '../components/MainCard';
import StatusCard from '../components/StatusCard';
import {useSearchDetail} from '../hooks/useSearchDetail';
import {useLayoutEffect} from 'react';

const PokemonDb = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const {data} = useSearchDetail(id ?? '');
  const handleLogout = () => {
    navigate('/');
  };

  useLayoutEffect(() => {
    if (!data) navigate('/');
  }, [data, navigate]);

  return (
    <>
      <header className={styles.db_header}>
        <div className={styles.inner}>
          <button
            type='button'
            className={cn(styles.spr_logout_icon, styles.logout)}
            onClick={handleLogout}>
            <span className={styles.hidden_text}>logout</span>
          </button>
        </div>
      </header>
      <main className={styles.db_container}>
        {data ? (
          <div className={styles.inner}>
            <MainCard
              id={data.id}
              enname={data.enname}
              krname={data.krname}
              form={data.form}
              type={data.type}
              imgname={data.imgname}
            />
            <StatusCard
              type={data.type}
              state={data.state}
            />
          </div>
        ) : null}
      </main>
    </>
  );
};

export default PokemonDb;
