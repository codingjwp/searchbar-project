import styles from "./errorModal.module.scss";

interface ModalProps {
  error?: {
    stack?: string;
    name?: string;
    message?: string;
  };
}

const ErrorModal = ({ error }: ModalProps) => {
  return (
    <div className={styles.modalBaseCenter}>
      <h1 className={styles.modalErrorName}>{error?.name}</h1>
      <h2 className={styles.modalErrorMessage}>{error?.message}</h2>
      <pre className={styles.modalErrorStack}>{error?.stack}</pre>
    </div>
  );
};

export default ErrorModal;
