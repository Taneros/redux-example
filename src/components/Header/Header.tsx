import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../features/search/searchSlice';
import styles from './styles.module.scss';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Pokémon Shop</div>
      <input
        type="text"
        placeholder="Search Pokémon..."
        onChange={handleSearch}
        className={styles.searchInput}
      />
      <div className={styles.cartButton}>Cart</div>
    </header>
  );
};

export default Header;
