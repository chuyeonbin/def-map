class KakaoMap {
  constructor() {
    this.maps = window.kakao.maps;
    this.options = {
      center: new this.maps.LatLng(36.2683, 127.6358),
      level: 13,
    };
    this.infowindows = {};
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
    gasStation.forEach(({ code, lat, lng }, index) => {
      //marker를 markers 배열에 저장
      this.markers[code] = new this.maps.Marker({
        position: new this.maps.LatLng(lat, lng),
      });

      //marker 클릭시 인포윈도우 띄우기 이벤트
      this.maps.event.addListener(
        this.markers[code],
        'click',
        (card => {
          return () => this.addInfoWindow(card);
        })(gasStation[index])
      );
    });

    this.clusterer.addMarkers(Object.values(this.markers));
  }

  deleteMarkers() {
    this.markers && this.clusterer.removeMarkers(Object.values(this.markers));
  }

  addInfoWindow(card) {
    const { addr, inventory, name, price, regDt, tel, lat, lng, code } = card;

    if (Object.keys(this.infowindows).find(item => item === code)) {
      return;
    }

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
    this.infowindows[code] = this.infowindow;
    this.infowindow.open(this.map, this.markers[code]);
  }

  deleteInfoWindow() {
    this.maps.event.addListener(this.map, 'zoom_changed', () => {
      if (Object.values(this.infowindows).length > 0) {
        Object.values(this.infowindows).forEach(infowindow =>
          infowindow.close()
        );
        this.infowindows = {};
      }
    });
  }
}

export default KakaoMap;
