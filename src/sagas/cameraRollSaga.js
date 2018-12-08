// @flow
import { all, put, call, takeLatest } from 'redux-saga/effects';
import { CameraRoll } from 'react-native';

// Actions
import { GET_PHOTOS, GET_PHOTOS_SUCCESS, GET_PHOTOS_ERROR } from 'src/store/actions/cameraRollActions';

// Utilities
import LoggerUtil from 'src/utils/LoggerUtil';

const cleanPhotos = (edges: Array<*>) => {
  return edges.map(({ node }) => {
    return {
      groupName: node.group_name,
      image: node.image,
      timestamp: node.timestamp,
      type: node.type
    };
  });
};

export function* getPhotos() {

  try {
    const response = yield call(CameraRoll.getPhotos, { first: 10000 });
    const { edges } = response;
    const photos = cleanPhotos(edges);

    yield put({ type: GET_PHOTOS_SUCCESS, payload: photos });
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