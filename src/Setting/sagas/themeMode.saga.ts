import {call, put, takeLatest, takeEvery} from 'redux-saga/effects';
import {THEMEMODE} from '../actions/ACTION_TYPES';
import {themeModePending, themeModeError, themeModeSuccess} from '../actions';

function* themeSaga({payload}: any) {
  const { data } = payload;
  yield put(themeModePending());
  try {
    yield put(themeModeSuccess(data));
  } catch (error) {
    yield put(themeModeError(error));
  }
}
export function* watchThemeSaga() {
  yield takeLatest(THEMEMODE.ACTION, themeSaga);
}
