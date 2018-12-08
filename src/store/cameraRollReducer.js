// @flow

import type { cameraRollType } from '@types/types';

// Actions
import { GET_PHOTOS, GET_PHOTOS_SUCCESS, GET_PHOTOS_ERROR } from 'src/store/actions/cameraRollActions';

const INITIAL_STATE = {
  loading: false,
  photos: [],
  error: ''
};

function cameraRoll(state: cameraRollType = INITIAL_STATE, action: *) {
  switch (action.type) {

    case GET_PHOTOS:
      return {
        ...state,
        loading: true
      };

    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        photos: action.payload,
        error: ''
      };

    case GET_PHOTOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}

export default cameraRoll;