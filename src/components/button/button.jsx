import React from 'react';
import styles from './button.module.css';

const Button = ({ name, onButtonClick }) => {
  const onClick = () => {
    onButtonClick(name);
  };

  return (
    <button onClick={onClick} className={styles.button}>
      {name}
    </button>
  );
};

export default Button;
