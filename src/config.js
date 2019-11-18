'use strict'

export default class Config {
  constructor(axios) {
    self.axios = axios
  }
  async getConfig() {
    let res = await self.axios.get('/config.json')

    return res.data
  }
}