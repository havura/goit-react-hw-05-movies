import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from 'api';
import css from '../MovieDetails/MovieDetails.module.css';
import { BiArrowBack } from 'react-icons/bi';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const detailsLink = location.state?.from ?? '/';
  const imagesURL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    getMovieById(id).then(res => setMovie(res.data));
  }, [id]);

  const {
    poster_path,
    original_title,
    title,
    vote_average,
    overview,
    genres,
    release_date,
  } = movie;

  return (
    <>
      <Link className={css.link} to={detailsLink} state={{ from: location }}>
        <BiArrowBack />
        Go Back
      </Link>
      <div className={css.wrapper}>
        <img
          src={
            poster_path
              ? imagesURL + poster_path
              : 'https://svgsilh.com/svg/2207743.svg'
          }
          alt={title}
          width="240px"
        />

        <div>
          <h1>
            {original_title }
            <span> ({release_date})</span>
          </h1>
          <p> User Score: {Math.round(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          {genres && (
            <ul>
              {genres.map(gener => (
                <li key={gener.id}>{gener.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className={css.secondWrapper}>
        <h2>Additional information:</h2>
        <ul className={css.list}>
          <li>
            <Link className={css.list__link} to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link className={css.list__link} to={'reviews'}>Reviews</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
};

export default MovieDetails;
