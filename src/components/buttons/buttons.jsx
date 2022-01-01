import React from 'react';
import Button from '../button/button';
import styles from './buttons.module.css';

const Buttons = ({ local, onButtonClick }) => {
  return (
    <>
      <h1 className={styles.title}>지역</h1>
      <ul className={styles.buttons}>
        {Object.keys(local).map(item => (
          <li key={item} className={styles.list}>
            <Button name={item} onButtonClick={onButtonClick} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Buttons;
