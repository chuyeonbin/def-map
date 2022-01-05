import React from 'react';
import styles from './card_list.module.css';
import Card from '../card/card';

const CardList = ({ gasStation, showCard }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>요소수 판매중 주유소 목록</h2>
      <ul className={styles.cards}>
        {gasStation.length <= 0 ? (
          <div>로딩중 ...</div>
        ) : (
          gasStation.map(item => (
            <Card key={item.code} card={item} showCard={showCard} />
          ))
        )}
      </ul>
    </section>
  );
};

export default CardList;
