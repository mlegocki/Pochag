// @flow
import type { NavigationScreenProp } from 'react-navigation';
import type StyleSheetPropType from 'react-native/Libraries/StyleSheet/StyleSheetPropType';

// stylesheet
export type StyleSheetType = StyleSheetPropType;

// navigation
export type NavigationType = NavigationScreenProp;

// cameraRoll
export type photo = { 
  groupName: string, 
  image: image,
  timestamp: number,
  type: string
};

type image = { 
  filename: string,
  height: number,
  isStored: boolean,
  playableDuration: number,
  uri: string,
  width: number
}

export type cameraRollType = {
  loading: boolean,
  photos: Array<photo>,
  error: string
};



