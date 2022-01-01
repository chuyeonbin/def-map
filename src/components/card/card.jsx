import React from 'react';
import styles from './card.module.css';

const Card = ({ card }) => {
  const { addr, inventory, name, price, openTime, regDt, tel } = card;
  return (
    <li className={styles.card}>
      <header className={styles.header}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.inventory}>재고량:{inventory}L</p>
      </header>
      <div className={styles.contents}>
        <p className={styles.price}>1L {price || 0}원</p>
        <p className={styles.address}>{addr}</p>
        <p className={styles.tel}>{tel}</p>
      </div>
      <footer className={styles.footer}>
        <span className={styles.regDt}>{regDt} 업데이트</span>
        <span className={styles.openTime}>
          영업시간:{openTime || '정보없음'}
        </span>
      </footer>
    </li>
  );
};

export default Card;
