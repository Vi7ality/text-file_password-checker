import styles from './ErrorMessage.module.scss';
interface ErrorMessageProps {
  errMessage: string;
}

const ErrorMessage = ({ errMessage }: ErrorMessageProps) => (
  <p className={styles.message}>{errMessage}</p>
);

export default ErrorMessage;
