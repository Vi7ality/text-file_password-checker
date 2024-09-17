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

  const parseLine = (line: string): PasswordRule => {
    const [rule, password] = line.split(': ');
    const [symbol, ruleRange] = rule.split(' ');
    const [minCount, maxCount] = ruleRange.split('-').map(Number);
    const result = {
      symbol: symbol,
      minCount: minCount,
      maxCount: maxCount,
      password: password,
    };
    return result;
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = event => {
      const content = event.target?.result;
      if (typeof content === 'string') {
        const lines = content.trim().split('\n');
        console.log('lines:', lines);
        lines.forEach(line => parseLine(line));
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
