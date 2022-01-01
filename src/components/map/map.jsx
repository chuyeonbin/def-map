import React, { useEffect, useRef } from 'react';
import styles from './map.module.css';

const Map = ({ local, map, gasStation }) => {
  const container = useRef(null);

  //주유소 위도 경도
  const positions = gasStation.map(item => ({ lat: item.lat, lng: item.lng }));

  useEffect(() => {
    map.setMap(container);
    map.setClusterer();
  }, []);

  useEffect(() => {
    map.addMarkers(positions);
  }, [gasStation]);

  return (
    <div
      ref={container}
      className={styles.map}
      style={{ width: '100%', height: '400px' }}
    ></div>
  );
};

export default Map;
