import { useLocation, Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const SearchBox = ({ onSubmit }) => {
  const location = useLocation();
  const detailsLink = location.state?.from ?? '/';

  return (
    <>
     <Link to={detailsLink} state={{ from: location }}>
        <BiArrowBack />
        Go Back
      </Link>
    <form onSubmit={onSubmit}>
      <input type="text" name="search" placeholder="Enter the Movie name" />
      <button type="submit">Search</button>
      </form>
      </>
  );
};
export default SearchBox;
