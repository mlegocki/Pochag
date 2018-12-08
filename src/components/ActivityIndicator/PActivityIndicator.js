// @flow

import React from 'react';
import { ActivityIndicator } from 'react-native';

// Utilities
import StyleUtil from 'src/utils/StyleUtil';

// Styling
import PActivityIndicatorStyles from 'src/components/ActivityIndicator/PActivityIndicatorStyles';

const styles = StyleUtil.getStyles(PActivityIndicatorStyles);

export const PActivityIndicator = () => {

  return (
    <ActivityIndicator size={'large'} color={styles.default} />
  );
};

export default PActivityIndicator;