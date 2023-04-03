import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api';

const Review = () => {
  const { id } = useParams();
  const [rewiews, setRewiews] = useState([]);

  useEffect(() => {
    getMovieReviews(id).then(res => setRewiews(res.data.results));
  }, [id]);

  return (
    <ul>
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
