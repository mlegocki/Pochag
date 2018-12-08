import { all, put, call, takeLatest } from 'redux-saga/effects';
import { CameraRoll } from 'react-native';

// Actions
import { GET_PHOTOS, GET_PHOTOS_SUCCESS, GET_PHOTOS_ERROR } from 'src/store/actions/cameraRollActions';

// Utilities
import LoggerUtil from 'src/utils/LoggerUtil';

export function* getPhotos() {
  
  try {
    const response = yield call(CameraRoll.getPhotos, { first: 10000 });
    const { edges } = response;
    yield put({ type: GET_PHOTOS_SUCCESS, payload: edges });
  }

  catch (e) {
    LoggerUtil.log('failed exception: getPhotos ', e);
    yield put({ type: GET_PHOTOS_ERROR, payload: e });
  }
  
};

export default function* cameraRollSaga() {
  yield all([
    takeLatest(GET_PHOTOS, getPhotos)
  ]);
}