import React, { useEffect } from 'react';
import Card from '../card/card';

const CardList = ({ gasStation }) => {
  useEffect(() => {
    console.log(gasStation);
  }, [gasStation]);
  return (
    <ul>
      {gasStation.map(item => (
        <Card key={item.code} card={item} />
      ))}
    </ul>
  );
};

export default CardList;
