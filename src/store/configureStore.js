import { combineReducers, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import testReducer from './testReducer';
import testReducerTwo from './testReducerTwo';

const testStore = combineReducers({
  testReducer,
  testReducerTwo
});

const middleware = [];

const store = createStore(testStore,
  composeWithDevTools(
    applyMiddleware(...middleware),
  )
);

export default store;