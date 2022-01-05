import { useState, useEffect } from 'react';
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
  const [loading, setLoading] = useState(true);

  //주유소 업데이트
  const updateGasStation = area => {
    setGasStation([]);
    datas
      .fetchData(area) //
      .then(value => {
        setGasStation(value);
      });
  };

  const showCard = card => {
    setClickCard(card);
  };

  useEffect(() => {
    datas
      .fetchData('경기') //
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
      <Map gasStation={gasStation} clickCard={clickCard} />
      <Buttons onButtonClick={updateGasStation} />
      <CardList gasStation={gasStation} showCard={showCard} />
    </div>
  );
};

export default App;
