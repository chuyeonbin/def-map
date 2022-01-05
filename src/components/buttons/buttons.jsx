import React from 'react';
import Button from '../button/button';
import styles from './buttons.module.css';

const local = [
  '경기',
  '강원',
  '경남',
  '경북',
  '광주',
  '대구',
  '대전',
  '부산',
  '서울',
  '세종',
  '울산',
  '인천',
  '전남',
  '전북',
  '제주',
  '충남',
  '충북',
];

const Buttons = ({ onButtonClick }) => {
  return (
    <>
      <h1 className={styles.title}>지역</h1>
      <ul className={styles.buttons}>
        {local.map(value => (
          <li key={value} className={styles.list}>
            <Button name={value} onButtonClick={onButtonClick} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Buttons;
