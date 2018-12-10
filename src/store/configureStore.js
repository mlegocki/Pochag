import { combineReducers, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import cameraRoll from 'src/store/cameraRollReducer';

import rootSaga from 'src/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware()

const testStore = combineReducers({
  cameraRoll,
});

const middleware = [sagaMiddleware, logger];

const store = createStore(testStore, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;