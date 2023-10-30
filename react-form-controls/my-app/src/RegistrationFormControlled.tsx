import { useState } from 'react';

export default function FormControlled() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(),
          setUserName(userName),
          setPassword(password),
          console.log(userName, password);
      }}>
      <label htmlFor="username">Username:</label>
      <input
        name="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}></input>
      <label htmlFor="password">Password:</label>
      <input
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}></input>
      <button>Submit</button>
    </form>
  );
}
