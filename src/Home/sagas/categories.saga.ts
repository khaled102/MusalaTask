import {call, put, takeLatest, takeEvery} from 'redux-saga/effects';
import {CATEGORIES} from '../actions/ACTION_TYPES';
import {categoryPending, categoryError, categorySuccess} from '../actions';

function* categorySaga() {
  yield put(categoryPending());
  try {
    yield put(categorySuccess());
  } catch (error) {
    yield put(categoryError(error));
  }
}
export function* watchCategorySaga() {
  yield takeLatest(CATEGORIES.ACTION, categorySaga);
}
