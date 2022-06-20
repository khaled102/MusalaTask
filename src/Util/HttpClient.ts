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
    let headers: any;
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
  async parseConfigAgainstDefaults(config: any) {
    const defaultConfig : any = await this.getDefaultConfig();
    for (const k in config) {
      if (k === 'headers') {
        defaultConfig[k] = {...defaultConfig.headers, ...config.headers};
      } else {
        defaultConfig[k] = config[k];
      }
    }
    return defaultConfig;
  }

  async request(url: string, method: any, config: any) {
    const parsedConfig = await this.parseConfigAgainstDefaults(config);
    return axios.request({
      url,
      method,
      ...parsedConfig,
    });
  }

  parseArgs(against: any, firstArg: any, secondArg: any) {
    if (secondArg) {
      secondArg[against] = firstArg;
    } else {
      secondArg = {};
      secondArg[against] = firstArg;
    }
    return secondArg;
  }
  get(url: string, params?: any, config?: any) {
    config = this.parseArgs('params', params, config);
    return this.request(url, 'get', config);
  }

  post(url: string, data: any, config: any) {
    config = this.parseArgs('data', data, config);
    return this.request(url, 'post', config);
  }

  put(url: string, data: any, config: any) {
    config = this.parseArgs('data', data, config);
    return this.request(url, 'put', config);
  }

  patch(url: string, data: any, config: any) {
    config = this.parseArgs('data', data, config);
    return this.request(url, 'patch', config);
  }

  delete(url: string, data: any, config: any) {
    config = this.parseArgs('params', data, config);
    return this.request(url, 'delete', config);
  }
})();
