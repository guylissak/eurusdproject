import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

// remove the compose for production
const store = createStore(
  rootReducer,
  initialState,
//    compose(
    applyMiddleware(...middleware)
    //  ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//    )
);

export default store;