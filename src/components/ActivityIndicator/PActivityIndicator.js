// @flow

import React from 'react';
import { ActivityIndicator } from 'react-native';

// Utilities

// Styling
import styles from 'src/components/ActivityIndicator/PActivityIndicatorStyles';


export const PActivityIndicator = () => {

  return (
    <ActivityIndicator size={'large'} color={styles.default} />
  );
};

export default PActivityIndicator;