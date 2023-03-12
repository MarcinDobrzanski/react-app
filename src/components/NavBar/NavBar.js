import styles from './NavBar.module.scss';
import Container from './../Container/Container';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <a href='/' className={styles.link}>
            <span className={styles.icon + ' fa fa-tasks'} />
          </a>
          <ul className={styles.list}>
            <li><a href='/' className={styles.item}>Home</a></li>
            <li><a href='/favorite' className={styles.item}>Favorite</a></li>
            <li><a href='/about' className={styles.item}>About</a></li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;