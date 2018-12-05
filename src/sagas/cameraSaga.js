import { all, takeLatest, put } from 'redux-saga/effects';

export function* testSaga() {
  console.log('WITHIN SAGA')
  yield put({ type: 'TEST' });
};

export default function* cameraSaga() {
  yield all([
    takeLatest('TEST_SAGA', testSaga)
  ]);
}