import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFavoritesCards } from '../../redux/cardsRedux';
import PageTitle from '../PageTitle/PageTitle';
import Card from './../Card/Card';

const Favorite = props => {
  const favoriteCards = useSelector(state => getFavoritesCards(state));

  return (
    <div className={styles.favoriteContainer}>
      <PageTitle>Favorite</PageTitle>
      {favoriteCards.length === 0 ? (
        <p className={styles.noCardsMessage}>No cards...</p>
      ) : (
        <div className={styles.articleWrapper}>
          <article className={styles.column}>
            <ul className={styles.cards}>
              {favoriteCards.map(card => (
                <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite} />
              ))}
            </ul>
          </article>
        </div>
      )}
    </div>
  );
};

export default Favorite;