import { useState } from 'react';

type PasswordRule = {
  symbol: string;
  minCount: number;
  maxCount: number;
  password: string;
};

const PasswordValidator = () => {
  const [validPasswordsCount, setValidPasswordsCount] = useState<number | null>(
    null
  );

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = event => {
      const content = event.target?.result;
      if (typeof content === 'string') {
        const lines = content.trim().split('\n');
        console.log('lines:', lines);
      }
    };
    reader.readAsText(file);
  };
  return (
    <div>
      <h1>Перевірка валідності паролів</h1>
      <input type="file" onChange={handleFileUpload} accept=".txt" />
      {validPasswordsCount !== null && (
        <p>Кількість валідних паролів: {validPasswordsCount}</p>
      )}
    </div>
  );
};

export default PasswordValidator;
