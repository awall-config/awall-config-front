class AwallApiService{

  constructor (axios, apiRoot) {
    this.apiRoot = apiRoot
    this.axios = axios
  }

  _url(path) {
    return this.apiRoot + '/' + path
  }

  async listInterfaces() {
    let url = this._url('/interfaces')

    let result = await this.axios.get(url)

    return result.data
  }
}

export default AwallApiService