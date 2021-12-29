import { useState, useEffect } from 'react';
import './app.css';
import DefStation from './service/def_station';
import Map from './components/map/map';
import Buttons from './components/buttons/buttons';

const App = ({ map }) => {
  const [defStations, setDefStations] = useState([]);

  const areaFilter = area => {};

  useEffect(() => {
    const datas = new DefStation();
    datas
      .fetchData() //
      .then(value => {
        setDefStations(value.data.data);
      });
  }, []);

  return (
    <div>
      <Map map={map} defStations={defStations} />
      <Buttons defStations={defStations} onButtonClick={areaFilter} />
    </div>
  );
};

export default App;
