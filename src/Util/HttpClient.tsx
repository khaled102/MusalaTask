import axios from 'axios';
import Storage from './Storage';

export default new (class HttpClient {
  constructor() {
    this.setupInterceptors();
  }

  setupInterceptors() {
    this.setupResponseInterceptors();
  }

  setupResponseInterceptors() {
    axios.interceptors.response.use(
      res => res,
      err => Promise.reject(err.response),
    );
  }

  handle_session_check = async () => {
    const session = await Storage.retrieveAuthToken();
    return session;
  };
  async getDefaultConfig() {
    let headers;
    try {
      let auth_user = await Storage.retrieveAuthToken();
      headers = auth_user;
    } catch (error) {
      console.log('get auth token error ', error);
    }
    return {
      headers: {
        Authorization: `Bearer ${headers}`,
      },
    };
  }
  async parseConfigAgainstDefaults(config) {
    const defaultConfig = await this.getDefaultConfig();
    for (const k in config) {
      if (k === 'headers') {
        defaultConfig[k] = {...defaultConfig.headers, ...config.headers};
      } else {
        defaultConfig[k] = config[k];
      }
    }
    return defaultConfig;
  }

  async request(url, method, config) {
    const parsedConfig = await this.parseConfigAgainstDefaults(config);
    return axios.request({
      url,
      method,
      ...parsedConfig,
    });
  }

  parseArgs(against, firstArg, secondArg) {
    if (secondArg) {
      secondArg[against] = firstArg;
    } else {
      secondArg = {};
      secondArg[against] = firstArg;
    }
    return secondArg;
  }

  get(url, params, config) {
    config = this.parseArgs('params', params, config);
    return this.request(url, 'get', config);
  }

  post(url, data, config) {
    config = this.parseArgs('data', data, config);
    return this.request(url, 'post', config);
  }

  put(url, data, config) {
    config = this.parseArgs('data', data, config);
    return this.request(url, 'put', config);
  }

  patch(url, data, config) {
    config = this.parseArgs('data', data, config);
    return this.request(url, 'patch', config);
  }

  delete(url, data, config) {
    config = this.parseArgs('params', data, config);
    return this.request(url, 'delete', config);
  }
})();
