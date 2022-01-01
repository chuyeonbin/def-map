import React, { useEffect } from 'react';
import styles from './card_list.module.css';
import Card from '../card/card';

const CardList = ({ gasStation }) => {
  useEffect(() => {
    console.log(gasStation);
  }, [gasStation]);
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>요소수 판매중 주유소 목록</h2>
      <ul className={styles.cards}>
        {gasStation.map(item => (
          <Card key={item.code} card={item} />
        ))}
      </ul>
    </section>
  );
};

export default CardList;
