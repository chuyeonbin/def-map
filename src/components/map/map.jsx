import React, { useEffect, useRef } from 'react';
import KakaoMap from '../../service/kakao_map';
import styles from './map.module.css';

const map = new KakaoMap();

const Map = ({ gasStation, clickCard }) => {
  const container = useRef(null);

  useEffect(() => {
    map.setMap(container);
    map.setClusterer();
    map.deleteInfoWindow();
  }, []);

  useEffect(() => {
    if (gasStation.length > 0) {
      map.deleteMarkers();
      map.addMarkers(gasStation);
      map.setLevel(13);
      map.setCenter(36.2683, 127.6358);
    }
  }, [gasStation]);

  useEffect(() => {
    if (clickCard) {
      // window.scrollTo(0, 0);
      map.setLevel(4);
      map.setCenter(clickCard.lat, clickCard.lng);
      map.addInfoWindow(clickCard);
    }
  }, [clickCard]);

  return (
    <div
      ref={container}
      className={styles.map}
      style={{ width: '100%', height: '400px' }}
    ></div>
  );
};

export default Map;
