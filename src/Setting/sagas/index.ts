import {all, fork} from 'redux-saga/effects';
import {watchThemeSaga} from './themeMode.saga';

export function* settingSagas() {
  yield all([fork(watchThemeSaga)]);
}
