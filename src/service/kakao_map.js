class KakaoMap {
  constructor() {
    this.maps = window.kakao.maps;
    this.options = {
      center: new this.maps.LatLng(36.2683, 127.6358),
      level: 13,
    };
  }

  setMap(container) {
    this.map = new this.maps.Map(container.current, this.options);
  }

  setClusterer() {
    this.clusterer = new this.maps.MarkerClusterer({
      map: this.map,
      averageCenter: true,
      minLevel: 10,
    });
  }

  setCenter(lat, lng) {
    this.map.setCenter(new this.maps.LatLng(lat, lng));
  }

  setLevel(level) {
    this.map.setLevel(level);
  }

  addMarkers(positions) {
    this.markers = positions.map(
      ({ lat, lng }) =>
        new this.maps.Marker({ position: new this.maps.LatLng(lat, lng) })
    );
    this.clusterer.addMarkers(this.markers);
  }

  deleteMarkers() {
    this.clusterer.removeMarkers(this.markers);
  }
}

export default KakaoMap;
