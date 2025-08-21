import { Link, NavLink } from 'react-router-dom';
import s from './Header.module.css';
import logoImage from '../../assets/icons/TravelTrucksLogo.svg';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={`container ${s.headerContainer}`}>
        <Link className={s.logoImage} to="/">
          <img src={logoImage} alt="Logo" />
        </Link>
        <nav>
          <ul className={s.nav}>
            <li className={s.link}>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? s.active : '')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalog"
                className={({ isActive }) => (isActive ? s.active : '')}
              >
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
