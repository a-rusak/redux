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

export function* helloSaga() {
  const helloSagaMsg = 'Hello Sagas!'
  yield helloSagaMsg;
  console.log(helloSagaMsg);
}

export function* asyncSaga() {
  yield call(delay, 2000);
  yield put(increment(10));
  yield put(request());
}

export function* fetchData(action) {
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
