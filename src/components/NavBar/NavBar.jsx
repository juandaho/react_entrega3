import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <Link to='/' className="navbar-brand">AL-MENTE</Link>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
          <NavLink to={'/category/Terapia'} className={({isActive}) => isActive ? 'ActiveOption':'Option'}>Terapia </NavLink>
          <NavLink to={'/category/Libros'} className={({isActive}) => isActive ? 'ActiveOption':'Option'}>Libros </NavLink>
          <NavLink to={'/category/Cursos'} className={({isActive}) => isActive ? 'ActiveOption':'Option'}>Cursos </NavLink>
        </div>
        </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
