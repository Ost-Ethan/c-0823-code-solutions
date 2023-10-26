import { useState } from 'react';
import './App.css';
import ClickyButton from './button.tsx';

function App() {
  const [count, setCount] = useState(0);

  function handleUpClick() {
    setCount(count + 1);
  }

  function handleDownClick() {
    setCount(count - 1);
  }

  return (
    <>
      <ClickyButton text="Down" onClick={handleDownClick} />
      <h3>{count}</h3>
      <ClickyButton text="Up" onClick={handleUpClick} />
    </>
  );
}

export default App;
