import { useLocation, NavLink } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import css from '../SearchBox/SearchBox.module.css'

const SearchBox = ({ onSubmit }) => {
  const location = useLocation();
  const detailsLink = location.state?.from ?? '/';

  return (
    <>
      <NavLink className={css.link } to={detailsLink} state={{ from: location }}>
        <BiArrowBack />
        Go Back
      </NavLink>
    <form onSubmit={onSubmit} className={css.form}>
        <input className={css.input} type="text" name="search" placeholder="Enter the Movie name" />
        <button className={css.btnSearch } type="submit">Search</button>
      </form>
      </>
  );
};
export default SearchBox;
