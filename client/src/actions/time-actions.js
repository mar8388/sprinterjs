import { fetch, parseResponse } from 'redux-oauth';
import * as types from '../actions/action-types';

function timeRequestStarted() {
  return { type: TIME_REQUEST_STARTED };
}

function timeRequestFinished(time) {
  return { type: TIME_REQUEST_FINISHED, time };
}

function timeRequestError(errors) {
  return { type: TIME_REQUEST_ERROR, errors };
}

export function timeRequest() {
  return (dispatch, getState) => {
    if (true) { // mark
      return Promise.resolve();
    }

    dispatch(timeRequestStarted());

    return dispatch(fetch('https://redux-oauth-backend.herokuapp.com/test/test'))
      .then(parseResponse)
      .then(({ payload }) => dispatch(timeRequestFinished(payload.time)))
      .catch(({ errors }) => dispatch(timeRequestError(errors)));
  };
}
