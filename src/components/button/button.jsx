import React from 'react';
import styles from './button.module.css';

const Button = ({ area, onButtonClick }) => {
  const onClick = () => {
    onButtonClick(area);
  };

  return (
    <button onClick={onClick} className={styles.button}>
      {area}
    </button>
  );
};

export default Button;
