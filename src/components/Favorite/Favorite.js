import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFavoritesCards } from '../../redux/store';
import PageTitle from '../PageTitle/PageTitle';
import Card from './../Card/Card';

const Favorite = props => {
  console.log('props', props);

  const favoriteCards = useSelector(state => getFavoritesCards(state));


  return (
    <div className={styles.hero}>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
        <ul className={styles.cards}>
          {favoriteCards.map(card => (
            <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite} />
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Favorite;