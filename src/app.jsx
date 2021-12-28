import { useState, useEffect } from 'react';
import './app.css';
import DefStation from './service/def_station';
import Map from './components/map';

const App = ({ map }) => {
  const [defStations, setDefStations] = useState([]);

  useEffect(() => {
    const datas = new DefStation();
    datas
      .fetchData() //
      .then(value => {
        setDefStations(value.data.data);
      });
  }, []);

  return (
    <>
      <Map map={map} defStations={defStations} />
    </>
  );
};

export default App;
