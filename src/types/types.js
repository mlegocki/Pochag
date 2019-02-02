// @flow
import type { NavigationScreenProp } from 'react-navigation';
import type StyleSheetPropType from 'react-native/Libraries/StyleSheet/StyleSheetPropType';

// stylesheet
export type StyleSheetType = StyleSheetPropType;

// navigation
export type NavigationType = NavigationScreenProp;

// cameraRoll
export type photoType = { 
  groupName: string, 
  image: imageType,
  timestamp: number,
  type: string
};

type imageType = { 
  filename: string,
  height: number,
  isStored: boolean,
  playableDuration: number,
  uri: string,
  width: number
}

export type cameraRollType = {
  loading: boolean,
  photos: Array<photoType>,
  error: string
};



