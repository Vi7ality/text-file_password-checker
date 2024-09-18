import { Dispatch, SetStateAction } from 'react';
import UploadDropzone from '../UploadDropzone';
import validateFileContent from '../../utils/validateFileContent';
import { PasswordRule } from '../../models/passwordRule';

interface PasswordValidatorProps {
  setValidPasswordsCount: Dispatch<SetStateAction<number | null>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setErrMessage: Dispatch<SetStateAction<string | null>>;
}

const PasswordValidator = ({
  setValidPasswordsCount,
  setLoading,
  setErrMessage,
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
        setErrMessage(null);
        setLoading(false);
      } else {
        setLoading(false);
        setErrMessage(
          'Завантажений файл має невалідну структуру. Спробуйте інший.'
        );
      }
    };

    reader.readAsText(file);
  };
  return (
    <div>
      <UploadDropzone handleFileRead={handleFileRead} />
    </div>
  );
};

export default PasswordValidator;
