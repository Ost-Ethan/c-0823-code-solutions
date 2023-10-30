import { useState } from 'react';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');

  function handleValidation() {
    setPassword(password);
    // check to see if input is valid\
    console.log('changed');
  }

  return (
    <form>
      <label htmlFor="password">Password:</label>
      <input
        onChange={handleValidation}
        value={password}
        name="password"
        type="text"
      />
      <span></span>
    </form>
  );
}
