import {combineReducers} from 'redux';
import {newsReducer} from './news.reducer';
import {searchingReducer} from './searching.reducer';

export const homeReducers = combineReducers({
  newsReducer: newsReducer,
  searchingReducer: searchingReducer,
});
