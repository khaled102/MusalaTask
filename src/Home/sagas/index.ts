import {all, fork} from 'redux-saga/effects';
import {watchNewsSaga} from './news.saga';
import {watchSearchingSaga} from './searching.saga';

export function* homeSagas() {
  yield all([fork(watchNewsSaga), fork(watchSearchingSaga)]);
}
