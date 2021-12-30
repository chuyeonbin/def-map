import React from 'react';
import Button from '../button/button';
import styles from './buttons.module.css';

const Buttons = ({ local, onButtonClick }) => {
  return (
    <ul className={styles.buttons}>
      {Object.keys(local).map(item => (
        <li key={item}>
          <Button area={item} onButtonClick={onButtonClick} />
        </li>
      ))}
    </ul>
  );
};

export default Buttons;
