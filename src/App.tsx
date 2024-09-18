import { useState } from 'react';
import './App.css';
import PasswordValidator from './components/PasswordValidator';
import PasswordsCounter from './components/PasswordsCount';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [validPasswordsCount, setValidPasswordsCount] = useState<number | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState<string | null>(null);
  return (
    <>
      <h1>Перевірка валідності паролів</h1>
      <PasswordValidator
        setValidPasswordsCount={setValidPasswordsCount}
        setLoading={setLoading}
        setErrMessage={setErrMessage}
      />
      {loading ? (
        <p>Завантаження...</p>
      ) : (
        validPasswordsCount !== null && (
          <PasswordsCounter passwordsCount={validPasswordsCount} />
        )
      )}
      {errMessage !== null && <ErrorMessage errMessage={errMessage} />}
    </>
  );
}

export default App;
