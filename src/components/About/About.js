import styles from './NavBar.module.scss';
import Container from './../Container/Container';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
  return (
    <Container className={styles.container}>
      <PageTitle>About</PageTitle>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      </p>
    </Container>
  );
};

export default About;