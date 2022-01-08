import { useState, useEffect, useRef } from 'react';
import './app.css';
import DefStation from './service/def_station';
import Map from './components/map/map';
import Buttons from './components/buttons/buttons';
import CardList from './components/card_list/card_list';
import Header from './components/header/header';

const datas = new DefStation();

const App = () => {
  const [gasStation, setGasStation] = useState([]);
  const [clickCard, setClickCard] = useState(null);
  const [sort, setSort] = useState(true);
  const [loading, setLoading] = useState(true);

  const prevRef = useRef('경기');
  //주유소 업데이트
  const updateGasStation = area => {
    if (prevRef.current === area) {
      return;
    }
    setGasStation([]);
    datas
      .fetchData(area, sort) //
      .then(value => {
        setGasStation(value);
        prevRef.current = area;
      });
  };

  //클릭한 카드 지도에 보여주기
  const showCard = card => {
    setClickCard(card);
  };

  //주유소 정렬하기
  const sortChange = () => {
    const sortValue = sortGasStation(gasStation, sort);
    setSort(!sort);
    setGasStation(sortValue);
  };

  useEffect(() => {
    datas
      .fetchData('경기', sort) //
      .then(value => {
        setGasStation(value);
        setLoading(false);
      });
  }, []);

  return loading === true ? (
    <div>로딩중...</div>
  ) : (
    <div className="container">
      <Header />
      <Map gasStation={gasStation} clickCard={clickCard} prevRef={prevRef} />
      <Buttons onButtonClick={updateGasStation} />
      <CardList
        gasStation={gasStation}
        showCard={showCard}
        sort={sort}
        sortChange={sortChange}
      />
    </div>
  );
};

function sortGasStation(gasStation, sort) {
  let sortValue;
  if (sort) {
    sortValue = [...gasStation].sort((a, b) => {
      if (a.price < b.price) return -1;
    });
    sortValue.map(value => {
      console.log(value.name, value.price);
    });
  } else {
    sortValue = [...gasStation].sort((a, b) => b.inventory - a.inventory);
  }
  return sortValue;
}

export default App;
