// @flow
import type { NavigationScreenProp } from 'react-navigation';
import type StyleSheetPropType from 'react-native/Libraries/StyleSheet/StyleSheetPropType';

// stylesheet
export type StyleSheetType = StyleSheetPropType;

// navigation
export type NavigationType = NavigationScreenProp;

// reducers
export type cameraRollType = {
  loading: boolean,
  photos: Array<*>,
  error: string
};

