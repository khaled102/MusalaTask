import {combineReducers} from 'redux';
import {categoryReducer} from './category.reducer';

export const homeReducers = combineReducers({
  categoryReducer: categoryReducer,
});
