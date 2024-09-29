import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';

const ProductPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div className={styles.productPage}>
      <h1>Pokemon Details for {id}</h1>
      <button>-</button>
      <span>1</span>
      <button>+</button>
    </div>
  );
};

export default ProductPage;
