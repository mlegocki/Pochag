// @flow

import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Types
import type { NavigationType } from '@types/types';

// Components
import PText from 'src/components/Text/PText';

// Utilities
import StyleUtil from 'src/utils/StyleUtil';

// Constants
import * as CONSTANTS from 'src/assets/strings/strings';

// Styles
import { THEME } from 'src/styles/styles';
import styles from 'src/components/NavigationHeader/PNavigationHeaderStyles';

type PropTypes = {
  title?: string,
  icon?: string,
  navigation: NavigationType
};

export const PNavigationHeader = (props: PropTypes) => {
  const { title, icon, navigation } = props;
  
  return (
    <View style={styles.defaultContainer}>
      <TouchableHighlight
        onPress={() => navigation.openDrawer()}
        underlayColor={THEME}
      >
        <Icon
          style={styles.defaultIcon}
          name={CONSTANTS[icon] || CONSTANTS.backArrow}
        />
      </TouchableHighlight>
      <View style={styles.defaultTextContainer}>
        <PText style={styles.defaultText}>
          {title || CONSTANTS.defaultNavHeader}
        </PText>
      </View>
    </View>
  );
};

export default PNavigationHeader;