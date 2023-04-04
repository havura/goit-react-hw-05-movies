import { NavLink, useLocation } from 'react-router-dom';
import css from '../MovieList/MovieList.module.css'

const MovieList = ({ movies }) => {
  const location = useLocation();
 
  return (
    <ul className={css.list}>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <NavLink className={css.movieLink} to={`/movies/${id}`} state={{from: location}}>{title}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};
export default MovieList;
