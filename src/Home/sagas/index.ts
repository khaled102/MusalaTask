import {all, fork} from 'redux-saga/effects';
import {watchNewsSaga} from './news.saga';

export function* homeSagas() {
  yield all([fork(watchNewsSaga)]);
}
