import {all, fork} from 'redux-saga/effects';
// Imports: sagas
import {homeSagas} from '../Home';
// Redux: Root Saga
export default function* rootSaga() {
  yield all([homeSagas]);
}
