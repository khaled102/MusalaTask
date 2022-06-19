import {all, fork} from 'redux-saga/effects';
import {watchCategorySaga} from './categories.saga';

export function* homeSagas() {
  yield all([fork(watchCategorySaga)]);
}
