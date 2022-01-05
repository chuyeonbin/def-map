import axios from 'axios';

class DefStation {
  constructor() {
    this.page = 1;
    this.perPage = 600;
    this.key = process.env.REACT_APP_DEF_API_KEY;
  }
  async fetchData(addr) {
    const datas = await axios.get(
      `https://api.odcloud.kr/api/uws/v1/inventory?page=${this.page}&perPage=${this.perPage}&cond%5Baddr%3A%3ALIKE%5D=${addr}&serviceKey=${this.key}`
    );
    return datas.data.data;
  }
}

export default DefStation;
