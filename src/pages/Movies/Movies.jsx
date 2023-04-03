import { getSearchMovie } from 'api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBox from 'components/SearchBox/SearchBox';
import  MovieList  from 'components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;
    try {
      getSearchMovie(query).then(response => {
        if (response.data.results.length === 0) {
          return alert(`No results for ${query}`);
        }
        setMovies(response.data.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  const onHandleSubmit = event => {
    event.preventDefault();
    const { value } = event.currentTarget.search;
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <div>
      <SearchBox onSubmit={onHandleSubmit} />
      <MovieList movies={movies} />
    </div>
  );
};
export default Movies;
