import { NavLink } from "react-router-dom"
import css from '../NavBar/NavBar.module.css'

const NavBar = () => {
    return (
       <nav className={css.navList}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
    )
}

export default NavBar