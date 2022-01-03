import { useState, useEffect } from 'react';
import './app.css';
import DefStation from './service/def_station';
import Map from './components/map/map';
import Buttons from './components/buttons/buttons';
import CardList from './components/card_list/card_list';
import Header from './components/header/header';

const local = {
  경기: [],
  강원: [],
  경남: [],
  경북: [],
  광주: [],
  대구: [],
  대전: [],
  부산: [],
  서울: [],
  세종: [],
  울산: [],
  인천: [],
  전남: [],
  전북: [],
  제주: [],
  충남: [],
  충북: [],
};

const App = ({ map }) => {
  const [gasStation, setGasStation] = useState([]);
  const [loading, setLoading] = useState(true);

  //클러스터 업데이트
  const updateClusterer = area => {
    map.setLevel();
    map.setCenter();
    setGasStation(gasStation => {
      if (gasStation !== local[area]) {
        map.deleteMarkers();
        return local[area];
      }
      return gasStation;
    });
  };

  useEffect(() => {
    const datas = new DefStation();
    datas
      .fetchData() //
      .then(value => {
        value.forEach(item => addrFilter(item));
        setGasStation(local['경기']);
        setLoading(false);
      });
  }, []);

  return loading === true ? (
    <div>로딩중...</div>
  ) : (
    <div className="container">
      <Header />
      <Map local={local} map={map} gasStation={gasStation} />
      <Buttons local={local} onButtonClick={updateClusterer} />
      <CardList gasStation={gasStation} />
    </div>
  );
};

//지역별로 배열에 필터링
function addrFilter(item) {
  const area = item.addr.substring(0, 2);
  if (!local[area]) {
    if (area === '평택') {
      local['경기'].push(item);
      return;
    }
    switch (area) {
      case '경상':
        item.addr.substring(2, 4) === '북도'
          ? local['경북'].push(item)
          : local['경남'].push(item);
        return;
      case '전라':
        item.addr.substring(2, 4) === '북도'
          ? local['전북'].push(item)
          : local['전남'].push(item);
        return;
      case '충청':
        item.addr.substring(2, 4) === '북도'
          ? local['충북'].push(item)
          : local['충남'].push(item);
        return;
    }
  }
  local[area].push(item);
}

export default App;
