import React, { useEffect, useRef } from 'react';

const Map = ({ map, defStations }) => {
  const container = useRef(null);

  useEffect(() => {
    map.setMap(container);
  }, []);

  return (
    <div
      ref={container}
      className="map"
      style={{ width: '500px', height: '500px' }}
    ></div>
  );
};

export default Map;
