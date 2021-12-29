import { useState, useEffect } from 'react';
import './app.css';
import DefStation from './service/def_station';
import Map from './components/map/map';
import Buttons from './components/buttons/buttons';

const local = {
  강원: [],
  경기: [],
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

  const localSearch = area => {};

  useEffect(() => {
    const datas = new DefStation();
    datas
      .fetchData() //
      .then(value => {
        value.forEach(item => addrFilter(item.addr));
        setGasStation(local['경기']);
      });
  }, []);

  return (
    <div>
      <Map map={map} gasStation={gasStation} />
      <Buttons gasStation={gasStation} onButtonClick={localSearch} />
    </div>
  );
};

//지역별로 배열에 필터링
function addrFilter(addr) {
  const area = addr.substring(0, 2);
  if (!local[area]) {
    if (area === '평택') {
      local['경기'].push(addr);
      return;
    }
    switch (area) {
      case '경상':
        addr.substring(2, 4) === '북도'
          ? local['경북'].push(addr)
          : local['경남'].push(addr);
        return;
      case '전라':
        addr.substring(2, 4) === '북도'
          ? local['전북'].push(addr)
          : local['전남'].push(addr);
        return;
      case '충청':
        addr.substring(2, 4) === '북도'
          ? local['충북'].push(addr)
          : local['충남'].push(addr);
        return;
    }
  }
  local[area].push(addr);
}

export default App;
