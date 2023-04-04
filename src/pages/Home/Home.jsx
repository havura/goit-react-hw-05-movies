import { getTrending } from 'api';
import { useState, useEffect } from 'react';
import  MovieList  from 'components/MovieList/MovieList';
import css from '../Home/Home.module.css'


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
      <h1 className={css.title}>Trending today</h1>
      <MovieList movies={trends} />
    </main>
  );
};

export default Home;
