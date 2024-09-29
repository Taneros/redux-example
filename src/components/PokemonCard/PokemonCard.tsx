import React from 'react';
import styles from './styles.module.scss';

interface PokemonCardProps {
  pokemon: {
    name: string;
    url: string;
  };
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className={styles.pokemonCard}>
      <h3>{pokemon.name}</h3>
      <button>-</button>
      <span>1</span>
      <button>+</button>
    </div>
  );
};

export default PokemonCard;

