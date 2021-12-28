import axios from 'axios';

class DefStation {
  constructor() {
    this.page = 1;
    this.perPage = 5000;
    this.key = process.env.REACT_APP_DEF_API_KEY;
  }
  async fetchData() {
    return axios.get(
      `https://api.odcloud.kr/api/uws/v1/inventory?page=${this.page}&perPage=${this.perPage}&serviceKey=${this.key}`
    );
  }
}

export default DefStation;
