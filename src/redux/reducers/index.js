import { combineReducers } from 'redux';
import chartReducer from './chartReducer';
import errorsReducer from './errorsReducer';

export default combineReducers({
  chart: chartReducer,
  errors: errorsReducer
});