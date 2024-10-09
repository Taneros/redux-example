import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import styles from './styles.module.scss';
import { Filter } from '../../components/Filter';

const MainPage: React.FC = () => {
  const { filteredPokemons, loading, error } = useSelector((state: RootState) => state.pokemon);


  


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.mainPage}>
      <Filter />
      <div className={styles.pokemonGrid}>
        {filteredPokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
