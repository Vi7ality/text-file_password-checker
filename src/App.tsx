import { useState } from 'react';
import './App.css';
import PasswordValidator from './components/PasswordValidator';
import PasswordsCounter from './components/PasswordsCount';

// TO DO:
// 1. Make dropzone
// 2. Make background animation
// 3. Separate types

function App() {
  const [validPasswordsCount, setValidPasswordsCount] = useState<number | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  return (
    <>
      <h1>Перевірка валідності паролів</h1>
      <PasswordValidator
        setValidPasswordsCount={setValidPasswordsCount}
        setLoading={setLoading}
      />
      {loading ? (
        <p>Завантаження...</p>
      ) : (
        validPasswordsCount !== null && (
          <PasswordsCounter passwordsCount={validPasswordsCount} />
        )
      )}
    </>
  );
}

export default App;
