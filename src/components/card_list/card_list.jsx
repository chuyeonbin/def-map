import React, { useEffect } from 'react';

const CardList = ({ gasStation }) => {
  useEffect(() => {
    console.log(gasStation);
  }, [gasStation]);
  return (
    <ul>
      {Object.keys(gasStation).map(item => {
        // <Card key={item.code} card={item} />
      })}
    </ul>
  );
};

export default CardList;
