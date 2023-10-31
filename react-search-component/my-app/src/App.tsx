import { useState } from 'react';
import SearchableList from './SearchableList';
import './App.css';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchableList searchString={search} />
    </div>
  );
}

export default App;
