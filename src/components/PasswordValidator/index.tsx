type PasswordRule = {
  symbol: string;
  minCount: number;
  maxCount: number;
  password: string;
};

const PasswordValidator = () => {
  return (
    <div>
      <h1>Перевірка валідності паролів</h1>
      <input type="file" accept=".txt" />
    </div>
  );
};

export default PasswordValidator;
