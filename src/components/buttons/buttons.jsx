import React from 'react';
import styles from './buttons.module.css';

const area = [
  '서울',
  '경기도',
  '부산광역시',
  '대구광역시',
  '인천광역시',
  '광주광역시',
  '대전광역시',
  '울산광역시',
  '세종특별자치시',
  '제주특별자치도',
  '강원도',
  '충청북도',
  '충청남도',
  '경상북도',
  '경상남도',
  '전라북도',
  '전라남도',
];

const Buttons = ({ defStations, onButtonClick }) => {
  return (
    <ul className={styles.buttons}>
      {area.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default Buttons;
