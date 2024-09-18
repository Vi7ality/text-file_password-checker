import styles from './PasswordsCount.module.scss';

interface PasswordsCounterProps {
  passwordsCount: number;
}

const PasswordsCounter = ({ passwordsCount }: PasswordsCounterProps) => {
  return (
    <>
      <p className={styles.counter}>
        Кількість валідних паролів: {passwordsCount}
      </p>
    </>
  );
};

export default PasswordsCounter;
