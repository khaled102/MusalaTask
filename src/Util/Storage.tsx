import AsyncStorage from '@react-native-async-storage/async-storage';

export default new (class Storage {
  [x: string]: any;
  constructor() {
    this.AUTH_TOKEN_KEY = 'auth_token';
    this.USER_ID = 'user_id';
    this.USER_TYPE = 'user_type';
    this.AUTH_FB_TOKEN_KEY = 'auth_fb_token';
    this.CONFIRM_STATUS = 'confirm_status';
    this.ACTIVE_STATUS = 'active_status';
    this.LANGUAGE = 'language';
    this.VERIFY = 'verify';
  }

  retrieveAuthToken = async (defaultValue = '') => {
    let session = AsyncStorage.getItem(this.AUTH_TOKEN_KEY) || defaultValue;
    return session;
  };

  saveAuthToken(token: string) {
    AsyncStorage.setItem(this.AUTH_TOKEN_KEY, token);
  }

  removeAuthToken() {
    AsyncStorage.removeItem(this.AUTH_TOKEN_KEY);
  }

  /********* auth user ********/

  retrieveAuthUser = async (defaultValue = '') => {
    let userid = AsyncStorage.getItem(this.USER_ID) || defaultValue;
    return userid;
  };

  saveAuthUser(user_id: string) {
    AsyncStorage.setItem(this.USER_ID, user_id);
  }

  removeAuthUser() {
    AsyncStorage.removeItem(this.USER_ID);
  }

  /********* social token ********/

  retrieveFbAuthToken(defaultValue = '') {
    return AsyncStorage.getItem(this.AUTH_FB_TOKEN_KEY) || defaultValue;
  }

  saveFbAuthToken(token: string) {
    AsyncStorage.setItem(this.AUTH_FB_TOKEN_KEY, token);
  }

  removeFbAuthToken() {
    AsyncStorage.removeItem(this.AUTH_FB_TOKEN_KEY);
  }

  /********* language ********/

  retrieveLanguage = async (defaultValue = '') => {
    let active = AsyncStorage.getItem(this.LANGUAGE) || defaultValue;
    return active;
  };

  saveLanguage(language: string) {
    AsyncStorage.setItem(this.LANGUAGE, language);
  }

  removeLanguage() {
    AsyncStorage.removeItem(this.LANGUAGE);
  }

  /********* verify ********/

  retrieveVerify = async (defaultValue = '') => {
    let verify = AsyncStorage.getItem(this.VERIFY) || defaultValue;
    return verify;
  };

  saveVerify(language: string) {
    AsyncStorage.setItem(this.VERIFY, language);
  }

  removeVerify() {
    AsyncStorage.removeItem(this.VERIFY);
  }
})();
