import { all, takeLatest, put } from 'redux-saga/effects';

export function* testSaga() {
  yield put({ type: 'TEST' });
};

export default function* cameraSaga() {
  yield all([
    takeLatest('TEST_SAGA', testSaga)
  ]);
}