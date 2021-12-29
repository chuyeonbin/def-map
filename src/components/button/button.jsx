import React from 'react';
import styles from './button.module.css';

const Button = ({ area }) => {
  return (
    <li className={styles.list}>
      <button className={styles.button}>{area}</button>
    </li>
  );
};

export default Button;
