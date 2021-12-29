import React from 'react';
import Button from '../button/button';
import styles from './buttons.module.css';

const Buttons = ({ local, onButtonClick }) => {
  return (
    <ul className={styles.buttons}>
      {Object.keys(local).map(item => (
        <Button key={item} area={item} onButtonClick={onButtonClick} />
      ))}
    </ul>
  );
};

export default Buttons;
