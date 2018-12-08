// @flow
import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Types
import type { NavigationType } from '@types/types';

// Components
import PText from 'src/components/Text/PText';

// Styles
import { THEME } from 'src/styles/styles';
import PNavigationHeaderStyles from 'src/components/NavigationHeader/PNavigationHeaderStyles';

// Utilities
import StyleUtil from 'src/utils/StyleUtil';

// Constants
import * as CONSTANTS from 'src/assets/strings/strings';

type PropTypes = {
  title?: string,
  icon?: string,
  navigation: NavigationType
};

const styles = StyleUtil.getStyles(PNavigationHeaderStyles);

export const PNavigationHeader = (props: PropTypes) => {
  const { title, icon, navigation } = props;
  
  return (
    <View style={styles.container}>
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