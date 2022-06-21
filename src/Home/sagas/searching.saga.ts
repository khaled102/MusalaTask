import {put, takeLatest} from 'redux-saga/effects';
import {SEARCHING} from '../actions/ACTION_TYPES';
import {searchingPending, searchingError, searchingSuccess} from '../actions';

function* searchingSaga({payload}: any): any {
  const { data } = payload;
  yield put(searchingPending());
  try {
    yield put(searchingSuccess(data));
  } catch (error) {
    yield put(searchingError(error));
  }
}
export function* watchSearchingSaga() {
  yield takeLatest(SEARCHING.ACTION, searchingSaga);
}
