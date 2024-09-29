import React from 'react';
import styles from './styles.module.scss';

  const CART_ITEMS = [
    { name: 'Pikachu', quantity: 2 },
    { name: 'Charmander', quantity: 1 },
  ];


const CartPage: React.FC = () => {

  return (
    <div className={styles.cartPage}>
      <h1>Your Cart</h1>
      {CART_ITEMS.map((item, index) => (
        <div key={index} className={styles.cartItem}>
          <p>{item.name}</p>
          <button>-</button>
          <span>{item.quantity}</span>
          <button>+</button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
