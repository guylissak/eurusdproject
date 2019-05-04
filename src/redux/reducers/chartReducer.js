import {REQUEST_DATA_SUCCESS, CLEAR_DATA} from '../types';


const initialState = {
    series: [
        {
        data: []
      }]
}

// Chart reducer
export default function(state = initialState, action) {
    switch (action.type) {
      case REQUEST_DATA_SUCCESS:
      return {
          ...state,
          series: action.payload
      }
      case CLEAR_DATA:
      return {
          ...state,
          series: action.payload
      }
      default:
        return state;
    }
  }