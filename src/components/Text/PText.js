import React from 'react';
import { Text } from 'react-native';

// Types
import type {StyleSheetType} from '@types/types';


// Utilities
import StyleUtil from 'src/utils/StyleUtil';

// Styling
import PTextStyles from 'src/components/Text/PTextStyles';
const styles = StyleUtil.getStyles(PTextStyles);

type PropTypes = {
  children: *,
  style?: StyleSheetType
}

export const PText = (props: PropTypes) => {
  
  const { children, style } = props;

  return (
    <Text style={[styles.default, style]}>
      {children}
    </Text>
  );
};

export default PText;