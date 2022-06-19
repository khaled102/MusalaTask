import {combineReducers} from 'redux';
import {newsReducer} from './news.reducer';

export const homeReducers = combineReducers({
  newsReducer: newsReducer,
});
