import React from 'react';
import styles from './card.module.css';

const Card = ({ card }) => {
  const { addr, inventory, name, openTime, price, regDt, tel } = card;
  return (
    <li>
      <h2>{name}</h2>
      <span>재고량:{inventory}L</span>
      <p>1L {price}원</p>
      <p>{addr}</p>
      <p>{tel}</p>
      <span>업데이트:{regDt}</span>
      <span>{openTime}</span>
    </li>
  );
};

export default Card;
