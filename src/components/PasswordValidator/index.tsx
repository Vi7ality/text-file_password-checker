import { useState } from 'react';

type PasswordRule = {
  ruleSymbol: string;
  minCount: number;
  maxCount: number;
  password: string;
};

const PasswordValidator = () => {
  const [validPasswordsCount, setValidPasswordsCount] = useState<number | null>(
    null
  );

  const isValidPassword = ({
    ruleSymbol,
    minCount,
    maxCount,
    password,
  }: PasswordRule) => {
    const symbolArray = password.split('');
    const symbolCount = symbolArray.filter(
      symbol => symbol === ruleSymbol
    ).length;
    return symbolCount >= minCount && symbolCount <= maxCount;
  };

  const parseLine = (line: string): PasswordRule => {
    const [rule, password] = line.split(': ');
    const [ruleSymbol, ruleRange] = rule.split(' ');
    const [minCount, maxCount] = ruleRange.split('-').map(Number);
    const result = {
      ruleSymbol: ruleSymbol,
      minCount: minCount,
      maxCount: maxCount,
      password: password,
    };
    return result;
  };

  const handleFileUploadRead = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = event => {
      const content = event.target?.result;
      if (typeof content === 'string') {
        const lines = content.trim().split('\n');
        const parsedLines = lines.map(line => parseLine(line));
      }
    };

    reader.readAsText(file);
  };
  return (
    <div>
      <input type="file" onChange={handleFileUploadRead} accept=".txt" />
      {validPasswordsCount !== null && (
        <p>Кількість валідних паролів: {validPasswordsCount}</p>
      )}
    </div>
  );
};

export default PasswordValidator;
