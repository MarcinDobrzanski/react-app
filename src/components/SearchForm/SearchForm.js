import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [phrase, setPhrase] = useState('');

    useEffect(() => {
        dispatch(updateSearchString(''));
    }, [dispatch]);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(phrase));
        setPhrase('');
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput value={phrase} onChange={e => setPhrase(e.target.value)} placeholder="Search…" />
            <Button>Search</Button>
        </form>
    );
};

export default SearchForm;