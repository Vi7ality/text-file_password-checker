import { Dispatch, SetStateAction } from 'react';
import UploadDropzone from '../UploadDropzone';
import validateFileContent from '../../utils/validateFileContent';

type PasswordRule = {
  ruleSymbol: string;
  minCount: number;
  maxCount: number;
  password: string;
};

interface PasswordValidatorProps {
  setValidPasswordsCount: Dispatch<SetStateAction<number | null>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const PasswordValidator = ({
  setValidPasswordsCount,
  setLoading,
}: PasswordValidatorProps) => {
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

  const countValidPasswords = (arrRules: PasswordRule[]) => {
    const validCount = arrRules.reduce((count, rule) => {
      return rule && isValidPassword(rule) ? count + 1 : count;
    }, 0);
    setValidPasswordsCount(validCount);
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

  const handleFileRead = (file: File) => {
    const reader = new FileReader();
    reader.onload = event => {
      setLoading(true);
      const content = event.target?.result;
      if (typeof content === 'string' && validateFileContent(content)) {
        const lines = content.trim().split('\n');
        const parsedLines = lines.map(line => parseLine(line));
        countValidPasswords(parsedLines);
        setLoading(false);
      } else {
        setLoading(false);
        alert(
          'The uploaded file has an invalid structure. Please check the file and try again.'
        );
      }
    };

    reader.readAsText(file);
  };
  return (
    <div>
      {/* <input type="file" onChange={handleFileUploadRead} accept=".txt" /> */}
      <UploadDropzone handleFileRead={handleFileRead} />
    </div>
  );
};

export default PasswordValidator;
