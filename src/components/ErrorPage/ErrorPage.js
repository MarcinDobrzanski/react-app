import styles from './ErrorPage.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const ErrorPage = () => {
  return (
    <div className={styles.hero}>
      <PageTitle>Oops!</PageTitle>
      <p>
      Sorry, an unexpected error has occurred.
      </p>
    </div>
  );
};

export default ErrorPage;