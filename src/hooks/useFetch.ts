import { useEffect, useState } from 'react';

export const useFetch = (search: string) => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    async function fetchApi() {
      const fet = await fetch(
        `https://rickandmortyapi.com/api/character${search}`
      );
      const response = await fet.json();
      const results = response.results;
      setResults(results);
    }
    fetchApi();
  }, [search]);

  return { results };
};
