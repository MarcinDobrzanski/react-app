import styles from './NavBar.module.scss';
import Container from './../Container/Container';

const Favorite = () => {
  return (
    <Container className={styles.container}>
        <h2 className={styles.tittle}>Favorite</h2>
    </Container>
  );
};

export default Favorite;