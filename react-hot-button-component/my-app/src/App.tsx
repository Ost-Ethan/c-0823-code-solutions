import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <HotButton />
    </>
  );
}

function HotButton() {
  const [count, setCount] = useState(0);

  function addcount() {
    setCount(count + 1);
  }

  let color = '';

  if (count < 3) {
    color = 'black';
  } else if (count < 6) {
    color = '#351C75';
  } else if (count < 9) {
    color = '#674EA7';
  } else if (count < 12) {
    color = '#E06666';
  } else if (count < 15) {
    color = '#F6B26B';
  } else if (count < 18) {
    color = '#FFFF00';
  } else if (count >= 18) {
    color = '#FFFFFF';
  }

  return (
    <button onClick={addcount} style={{ backgroundColor: color }}>
      Hot Button
    </button>
  );
}

export default App;
