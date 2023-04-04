import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'api';
import css from '../Cast/Cast.module.css'


const Cast = () => {
  const { id } = useParams();
  const [ actors, setActors ] = useState([]);
  const imagesURL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    getMovieCredits(id).then(res => setActors(res.data.cast));
  }, [id]);

  return (
    <>
      <ul className={css.castWrapper}>
        {actors.map(
          ({ cast_id, profile_path, name, original_name, character }) => (
            <li key={cast_id}>
              <img
                src={
                  profile_path
                    ? imagesURL + profile_path
                    : 'https://svgsilh.com/svg/2207743.svg'
                }
                alt={name}
                width="100px"
                
              />
              <div>
                <h2 className={css.actorName}>{original_name || name}</h2>
                <p className={css.actorNameMovie}>{character}</p>
              </div>
            </li>
          )
        )}
      </ul>
    </>
  );
};
export default Cast;
