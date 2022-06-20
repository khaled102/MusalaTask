import {call, put, takeLatest, takeEvery} from 'redux-saga/effects';
import {NEWS} from '../actions/ACTION_TYPES';
import {newsPending, newsError, newsSuccess} from '../actions';
import {getNews} from '../services';

type ResponseGenerator = {
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}
function* newsSaga(): any {
  yield put(newsPending());
  try {
    const response: ResponseGenerator = yield call(getNews);
    yield put(newsSuccess(response));
  } catch (error) {
    yield put(newsError(error));
  }
}
export function* watchNewsSaga() {
  yield takeLatest(NEWS.ACTION, newsSaga);
}
