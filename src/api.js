class AwallApiService{

  constructor (axios, config) {
    this.axios = axios
    this.config = config
  }

  async _url(path) {
    let config = await this.config.getConfig()

    let apiRoot = config.apiBaseUrl
    return apiRoot + '/' + path
  }

  async listInterfaces() {
    let url = await this._url('interfaces')

    let result = await this.axios.get(url)

    return result.data
  }
}

export default AwallApiService