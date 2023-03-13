import styles from './NavBar.module.scss';
import Container from './../Container/Container';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <a href='/' className={styles.link}>
            <span className={styles.icon + ' fa fa-tasks'} />
          </a>
          <ul className={styles.list}>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.item}
              to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.item}
              to="/favorite">Favorite</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.item}
              to="/about">About</NavLink></li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;