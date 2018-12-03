import React, { Component } from 'react';
import { Text } from 'react-native';

// Styling
import PTextStyles from 'src/components/Text/PTextStyles';

// Utilities
import StyleUtil from 'src/utils/StyleUtil';

export const PText = (props) => {

  const styles = StyleUtil.getStyles(PTextStyles);
  const { children, style } = props;

  return (
    <Text style={[styles.default, style]}>
      {children}
    </Text>
  )
}

export default PText;