import {call, put, takeLatest, takeEvery} from 'redux-saga/effects';
import {NEWS} from '../actions/ACTION_TYPES';
import {newsPending, newsError, newsSuccess} from '../actions';

function* newsSaga() {
  yield put(newsPending());
  try {
    yield put(newsSuccess());
  } catch (error) {
    yield put(newsError(error));
  }
}
export function* watchNewsSaga() {
  yield takeLatest(NEWS.ACTION, newsSaga);
}
