import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import { useFetch } from './hooks/useFetch';

function App() {
  //const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const { results } = useFetch(search);
  // useEffect(() => {
  //   async function fetchApi() {
  //     const fet = await fetch(
  //       `https://rickandmortyapi.com/api/character${search}`
  //     );
  //     const response = await fet.json();
  //     const results = response.results;
  //     setResults(results);
  //   }
  //   fetchApi();
  // }, [search]);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const queryTerm = event.currentTarget.search.value;
    setSearch(`/?name=${queryTerm}`);
    event.currentTarget.reset();
  };

  return (
    <>
      <header className='flex items-center justify-center max-w-screen-xl p-4'>
        <form onSubmit={handleSearch} className='search-bar'>
          <input
            type='text'
            name='search'
            placeholder='Busca Personaje'
            className='search-bar--input'
          />
          <button className='search-bar--button'>Search</button>
        </form>
      </header>
      <main className='mx-auto max-w-7xl py-7'>
        <div className='flex flex-wrap'>
          {results.map((result, index) => (
            <Card data={result} key={index} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
