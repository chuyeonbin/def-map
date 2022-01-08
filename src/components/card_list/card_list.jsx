import React from 'react';
import styles from './card_list.module.css';
import Card from '../card/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons';

const CardList = ({ gasStation, showCard, sort, sortChange }) => {
  const onClick = () => {
    sortChange();
  };
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>요소수 판매중 주유소 목록</h2>
        <div className={styles.sort} onClick={onClick}>
          <FontAwesomeIcon icon={faSortAmountDown} />
          <span>{sort === true ? '재고순' : '가격순'}</span>
        </div>
      </header>
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
