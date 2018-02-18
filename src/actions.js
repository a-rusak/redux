import { createAction, createActions } from 'redux-actions';

const fetchCreators = createActions({
  FETCH: {
    REQUEST: undefined,
    SUCCESS: undefined,
    FAILURE: undefined
  }
});
export const request = fetchCreators.fetch.request;
export const success = fetchCreators.fetch.success;
export const failure = fetchCreators.fetch.failure;

const counterCreators = createActions({
  COUNTER: {
    INCREMENT: undefined,
    DECREMENT: undefined
  }
});
export const increment = counterCreators.counter.increment;
export const decrement = counterCreators.counter.decrement;
export const incrementAsync = counterCreators.counter.incrementAsync;

export const async = createAction('ASYNC');
export const showWarning = createAction('SHOW_WARNING');
