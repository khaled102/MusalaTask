import HttpClient from '../../Util/HttpClient';
import {API_BASE_URL} from '../../constants';

export const getCategories = () =>
  HttpClient.get(`${API_BASE_URL}/everything?q=bitcoin&apiKey=1a644215ce47433e84c7030b058dc9e9`).then(res => res.data);
