import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/store'; // importuj akcję

const Card = props => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleCardFavorite(props.id)); // przekaż id karty do akcji
  };

  return (
    <li className={styles.card}>
      {props.title}
      <span
        className={clsx(
          styles.icon,
          'fa',
          props.isFavorite ? 'fa-star' : 'fa-star-o'
        )}
        onClick={handleToggleFavorite}
      />
    </li>
  );
};

export default Card;