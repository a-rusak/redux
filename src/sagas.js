import { delay } from 'redux-saga';
import {
  put,
  takeEvery,
  takeLatest,
  call
} from 'redux-saga/effects';
import {
  request,
  success,
  failure,
  async,
  increment
} from './actions';
import { search } from './api';

function* helloSaga() {
  yield console.log('Hello Sagas!');
}

/* function* watchAsync() {
  yield takeLatest(async, asyncSaga);
} */
function* asyncSaga() {
  yield call(delay, 2000);
  yield put(increment(10));
  yield put(request());
}

/* function* watchFetchData() {
  yield takeEvery(request, fetchData);
} */
function* fetchData(action) {
  try {
    const data = yield call(search, `day`);
    yield put(success(data));
  } catch (error) {
    yield put(failure(error));
  }
}

export default function* rootSaga() {
  yield helloSaga();
  yield takeEvery(request, fetchData);
  yield takeLatest(async, asyncSaga);
}
