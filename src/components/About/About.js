import styles from './NavBar.module.scss';
import Container from './../Container/Container';

const About = () => {
  return (
    <Container className={styles.container}>
        <h2 className={styles.tittle}>About</h2>
    </Container>
  );
};

export default About;