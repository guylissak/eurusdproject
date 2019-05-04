import {REQUEST_DATA_FAILED} from '../types';

const initialState = {};

// Errors reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_DATA_FAILED:
      return action.payload;
    default:
      return state;
  }
}