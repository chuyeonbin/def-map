class KakaoMap {
  constructor() {
    this.maps = window.kakao.maps;
    this.options = {
      center: new this.maps.LatLng(37, 127),
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
