import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card';

function App() {
  const [results, SetResults] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    async function fetchApi() {
      const fet = await fetch(
        `https://rickandmortyapi.com/api/character${search}`
      );
      const response = await fet.json();
      const results = response.results;
      SetResults(results);
    }
    fetchApi();
  }, [search]);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const queryTerm = event.currentTarget.search.value;
    setSearch(`/?name=${queryTerm}`);
    event.currentTarget.reset();
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input type='text' name='search' placeholder='Busca Personaje' />
        <button>Search</button>
      </form>
      <div className='flex'>
        {results.map((result) => (
          <Card data={result} />
        ))}
      </div>
    </>
  );
}

export default App;
