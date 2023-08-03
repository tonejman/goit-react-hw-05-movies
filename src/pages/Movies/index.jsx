import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'utils/api';
import { SearchMovies } from 'components/SearchMovies';

const Movies = () => {
  const [searchParams, setSearhParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  const query = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    const searchText = e.target.elements.query.value;
    if (searchText.trim() === '') {
      alert('Enter data for search');
      return;
    }

    setSearhParams({ query: searchText.trim() });
  };

  useEffect(() => {
    if (query) {
      setIsLoader(true);
      getSearchMovies(query)
        .then(({ data: { results } }) => {
          setMovies([...results]);
        })
        .catch(error => console.log(error))
        .finally(() => {
          setIsLoader(false);
        });
    }
  }, [query]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      <>
        {!isLoader && (
          <>
            {movies.length > 0 && <SearchMovies movies={movies} />}
            {movies.length === 0 && query && (
              <p>No matches found! Please enter other data for search.</p>
            )}
          </>
        )}
      </>
    </>
  );
};

export default Movies;
