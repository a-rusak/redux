import { success, failure, increment, decrement } from './actions';
import { handleAction, handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const counter = handleActions({
  [increment]: (state, action) => ({
    value: state.value + action.payload
  }),

  [decrement]: (state, action) => ({
    value: state.value - action.payload
  })
}, { value: 0 });

export const getCounterValue = state => state.counter.value;

const shows = handleAction(success, (state, action) => action.payload, []);
const error = handleAction(failure, (state, action) => action.error, null);


export default combineReducers({
  counter,
  shows,
  error
});