import React, { useEffect, useRef } from 'react';

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
      className="map"
      style={{ width: '50%', height: '500px' }}
    ></div>
  );
};

export default Map;
