import { createAction, createActions } from 'redux-actions';

export const { fetch: { request, success, failure } } = createActions({
  FETCH: {
    REQUEST: undefined,
    SUCCESS: undefined,
    FAILURE: undefined
  }
});

export const {
  counter: { increment, decrement, incrementAsync }
} = createActions({
  COUNTER: {
    INCREMENT: undefined,
    DECREMENT: undefined
  }
});

export const async = createAction('ASYNC');
export const showWarning = createAction('SHOW_WARNING');
