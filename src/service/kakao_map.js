class KakaoMap {
  constructor() {
    this.maps = window.kakao.maps;
    this.options = {
      center: new this.maps.LatLng(36.2683, 127.6358),
      level: 13,
    };
    this.map = null;
  }

  getMap() {
    return this.map;
  }

  setMap(container) {
    this.map = new this.maps.Map(container.current, this.options);
  }
}

export default KakaoMap;
