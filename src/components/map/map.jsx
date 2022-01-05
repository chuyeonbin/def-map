import React, { useEffect, useRef } from 'react';
import KakaoMap from '../../service/kakao_map';
import styles from './map.module.css';

const map = new KakaoMap();

const Map = ({ gasStation, clickCard }) => {
  const container = useRef(null);

  //주유소 위도 경도
  const positions = gasStation.map(item => ({
    lat: item.lat,
    lng: item.lng,
  }));

  useEffect(() => {
    map.setMap(container);
    map.setClusterer();
    map.addMarkers(positions);
  }, []);

  useEffect(() => {
    if (gasStation.length > 0) {
      map.deleteMarkers();
      map.addMarkers(positions);
      map.setLevel(13);
      map.setCenter(36.2683, 127.6358);
    }
  }, [gasStation]);

  useEffect(() => {
    if (clickCard) {
      window.scrollTo(0, 0);
      map.setLevel(4);
      map.setCenter(clickCard.lat, clickCard.lng);
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
