import { helloSaga, asyncSaga, fetchData } from './sagas';
import { increment, request, success, failure } from './actions';
import {
  call,
  take,
  put,
  delay
} from 'redux-saga/effects';
import { counter, getCounterValue } from './reducers';
import { search } from './api';

describe('Redux', () => {
  describe('helloSaga', () => {
    const saga = helloSaga();
    const helloSagaMsg = 'Hello Sagas!';
    it(`return ${helloSagaMsg}`, () => {
      expect(saga.next().value).toEqual(helloSagaMsg);
    });
  });

  describe('counter', () => {
    it(`increment`, () => {
      expect(
        counter(
          { value: 3 },
          { ...increment(), payload: 7 }
        )
      ).toEqual({
        value: 10
      });
    });
  });

  describe('asyncSaga', () => {
    const saga = asyncSaga();
    it(`delayed`, () => {
      expect(saga.next().value.CALL.fn).toBeDefined();
    });
    it(`dispatch increment with 10`, () => {
      expect(saga.next().value).toEqual(put(increment(10)));
    });
    it(`dispatch request`, () => {
      expect(saga.next().value).toEqual(put(request()));
    });
  });

  describe(`fetchData`, () => {

    it(`call search from API`, () => {
      const saga = fetchData();
      expect(saga.next().value).toEqual(call(search, `day`));
    });
    it(`dispatch success action`, () => {
      const saga = fetchData();
      saga.next();
      expect(saga.next().value).toEqual(put(success()));
    });
    it(`dispatch failure action`, () => {
      const error = new Error('test error');
      const saga = fetchData();
      saga.next();
      expect(saga.throw(error).value).toEqual(put(failure(error)));
    });
  });
});
