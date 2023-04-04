import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api';
import css from '../Reviews/Reviews.module.css'

const Review = () => {
  const { id } = useParams();
  const [rewiews, setRewiews] = useState([]);

  useEffect(() => {
    getMovieReviews(id).then(res => setRewiews(res.data.results));
  }, [id]);

  return (
    <ul className={css.reviewWrapper}>
      {rewiews.map(({ id, content, author }) => (
        <li key={id}>
          <h3>Author:{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
export default Review;
