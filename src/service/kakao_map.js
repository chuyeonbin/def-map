class KakaoMap {
  constructor() {
    this.maps = window.kakao.maps;
    this.options = {
      center: new this.maps.LatLng(36.2683, 127.6358),
      level: 13,
    };
    this.customOverlayArr = [];
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

      //marker 클릭시 커스텀오버레이 띄우기 이벤트
      this.maps.event.addListener(
        this.markers[code],
        'click',
        (card => {
          return () => this.addCustomOverlay(card);
        })(gasStation[index])
      );
    });

    this.clusterer.addMarkers(Object.values(this.markers));
  }

  deleteMarkers() {
    this.markers && this.clusterer.removeMarkers(Object.values(this.markers));
  }

  addCustomOverlay(card) {
    const { addr, inventory, name, price, regDt, tel, lat, lng } = card;

    const position = new this.maps.LatLng(lat, lng);

    const content = `<div style="padding: 1rem; background: white; border-radius: 22px;"> 
      <p>${name}</p>
      <p>${addr}</p>
      <p>재고량:${inventory}L</p>
      <p>가격:${price || 0}원</p>
      <p>${tel}</p>
      <p>업데이트:${regDt}</p>
    </div>`;

    this.customOverlay = new this.maps.CustomOverlay({
      position: position,
      content: content,
      xAnchor: 0.3,
      yAnchor: 1.4,
      zIndex: 1,
    });

    this.customOverlayArr.push(this.customOverlay);
    this.customOverlay.setMap(this.map);
  }

  deleteCustomOverlay() {
    this.maps.event.addListener(this.map, 'zoom_changed', () => {
      if (this.customOverlayArr.length > 0) {
        this.customOverlayArr.forEach(customOverlay =>
          customOverlay.setMap(null)
        );
        this.CustomOverlayArr = [];
      }
    });
  }
}

export default KakaoMap;
