import styles from './List.module.scss';
import { useSelector } from 'react-redux';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { getListById, getColumnsByList } from '../../redux/store';

const List = () => {

  const listData = useSelector(state => getListById(state, 1));
  const columns = useSelector(state => getColumnsByList(state, listData.id));
  console.log('listData', listData);

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <section className={styles.columns}>
        {columns.map(column =>
          <Column
            key={column.id}
            {...column} />
        )}
      </section>
      <ColumnForm />
    </div>
  );
};

export default List;