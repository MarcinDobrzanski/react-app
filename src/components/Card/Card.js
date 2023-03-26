import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/store';

const Card = props => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleCardFavorite(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <span
        className={clsx(
          styles.icon,
          'fa',
          'fa-star-o',
          props.isFavorite && styles.goldColor
        )}
        onClick={handleToggleFavorite}
      />
    </li>
  );
};

export default Card;