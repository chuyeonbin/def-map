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

  addMarkers(gasStation) {
    this.markers = {};
    gasStation.forEach(({ code, lat, lng }) => {
      this.markers[code] = new this.maps.Marker({
        position: new this.maps.LatLng(lat, lng),
      });
    });
    this.clusterer.addMarkers(Object.values(this.markers));
  }

  deleteMarkers() {
    this.markers && this.clusterer.removeMarkers(Object.values(this.markers));
  }

  addInfoWindow(card) {
    const { addr, inventory, name, price, regDt, tel, lat, lng, code } = card;
    this.iwContent = `<div>
      <p>${name}</p>
      <p>${addr}</p>
      <p>재고:${inventory}</p>
      <p>가격:${price}</p>
      <p>${tel}</p>
      <p>${regDt}</p>
      </div>`;
    this.infowindow = new this.maps.InfoWindow({
      position: new this.maps.LatLng(lat, lng),
      content: this.iwContent,
      range: 200,
      zIndex: 1,
      removable: true,
    });
    this.infowindow.open(this.map, this.markers[code]);
  }

  deleteInfoWindow() {
    this.maps.event.addListener(this.map, 'zoom_changed', () => {
      this.infowindow && this.infowindow.close();
    });
  }
}

export default KakaoMap;
