const validateFileContent = (fileContent: string): boolean => {
  console.log('file content', fileContent);
  const lines = fileContent.split('\n');

  const lineRegex = /^\s*([a-z])\s+(\d+)-(\d+):\s+([a-zA-Z]+)\s*$/;

  return lines.every(line => lineRegex.test(line.trim()));
};

export default validateFileContent;
