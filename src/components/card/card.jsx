import React, { memo } from 'react';
import styles from './card.module.css';

const Card = memo(({ card, showCard }) => {
  const onClick = () => {
    showCard(card);
  };
  const { addr, inventory, name, price, openTime, regDt, tel } = card;
  return (
    <li className={styles.card} onClick={onClick}>
      <header className={styles.header}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.inventory}>
          {inventory == 0 ? (
            <span className={styles.red}>매진</span>
          ) : (
            <>
              재고량:<span className={styles.blue}>{inventory}</span>L
            </>
          )}
        </p>
      </header>
      <div className={styles.contents}>
        <p className={styles.price}>
          1L{' '}
          {price === 'undefined' || price === null ? (
            <span>가격정보없음</span>
          ) : (
            <span>{price}원</span>
          )}
        </p>
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
});

export default Card;
