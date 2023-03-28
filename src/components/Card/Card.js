import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = props => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleCardFavorite(props.id));
  };

  const handleRemoveCard = () => {
    dispatch(removeCard(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <span
          className={clsx(
            styles.icon,
            'fa',
            'fa-star-o',
            props.isFavorite && styles.goldColor
          )}
          onClick={handleToggleFavorite}
        />
        <span
          className={clsx(styles.icon, 'fa', 'fa-trash')}
          onClick={handleRemoveCard}
        />
      </div>
    </li>
  );
};

export default Card;