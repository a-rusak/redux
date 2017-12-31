import { delay } from 'redux-saga';
import {
  put,
  take,
  takeEvery,
  takeLatest,
  call
} from 'redux-saga/effects';
import {
  request,
  success,
  failure,
  async,
  showWarning,
  increment
} from './actions';
import { search } from './api';

function* helloSaga() {
  yield console.log('Hello Sagas!');
}

function* asyncSaga() {
  yield call(delay, 2000);
  yield put(increment(10));
  yield put(request());
}

function* fetchData(action) {
  try {
    const data = yield call(search, `day`);
    yield put(success(data));
  } catch (error) {
    yield put(failure(error));
  }
}

function* watchFirstThreeAsyncCall() {
  for (let i = 0; i < 3; i++) {
    yield take(async);
  }
  yield put(showWarning(`Allo!`));
}

export default function* rootSaga() {
  yield helloSaga();
  yield takeEvery(request, fetchData);
  yield takeLatest(async, asyncSaga);
  yield watchFirstThreeAsyncCall();
}
