import { getTrending } from 'api';
import { useState, useEffect } from 'react';
import  MovieList  from 'components/MovieList/MovieList';

const Home = () => {
  const [trends, setTrends] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      getTrending().then(({ data }) => setTrends(data.results));
    } catch (error) {
      setError(error);
      if (error === null) {
        return alert(`Something went wrong`);
      }
    }
  }, [error]);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList movies={trends} />
    </main>
  );
};

export default Home;
