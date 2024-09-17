interface PasswordsCounterProps {
  passwordsCount: number;
}

const PasswordsCounter = ({ passwordsCount }: PasswordsCounterProps) => {
  return (
    <>
      <p>Кількість валідних паролів: {passwordsCount}</p>
    </>
  );
};

export default PasswordsCounter;
