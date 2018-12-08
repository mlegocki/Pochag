import { all } from 'redux-saga/effects';

// Sagas
import cameraRollSaga from 'src/sagas/cameraRollSaga';

export default function* rootSaga() {
  yield all([
    cameraRollSaga()
  ]);
}