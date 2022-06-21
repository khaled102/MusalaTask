import {all, fork} from 'redux-saga/effects';
// Imports: sagas
import {homeSagas} from '../Home';
import {settingSagas} from '../Setting';
// Redux: Root Saga
export default function* rootSaga() {
  yield all([fork(homeSagas), fork(settingSagas)]);
}
