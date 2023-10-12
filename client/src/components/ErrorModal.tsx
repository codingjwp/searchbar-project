import { Link, useRouteError } from 'react-router-dom';
import styles from './errorModal.module.scss';

const ErrorModal = () => {
  const error = useRouteError();
  const info = {
    name: error instanceof Error ? error.name : 'Unexpected Application Error!',
    message: error instanceof Error ? error.message : '404 Not Found',
    stack:
      error instanceof Error
        ? error.stack ?? 'check url link'
        : 'check url link',
  };

  return (
    <div className={styles.modal_base}>
      <h2 className={styles.modal_error_name}>{info?.name}</h2>
      <h3 className={styles.modal_error_message}>{info?.message}</h3>
      <pre className={styles.modal_error_stack}>{info?.stack}</pre>
      <p className={styles.modal_error_stack}>
        첫 페이지로 돌아갈려면
        <span className={styles.modal_error_span}>
          <Link to='/'>이곳</Link>
        </span>
        를 클릭 해주세요.
      </p>
    </div>
  );
};

export default ErrorModal;
