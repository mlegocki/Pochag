import { all } from 'redux-saga/effects';

import cameraSaga from 'src/sagas/cameraSaga';

export default function* rootSaga() {
  yield all([
    cameraSaga()
  ]);
}