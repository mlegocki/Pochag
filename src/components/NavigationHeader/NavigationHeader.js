import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

// Components
import PText from 'src/components/Text/PText';

// Styles
import { THEME } from 'src/styles/styles';
import NavigationHeaderStyles from 'src/components/NavigationHeader/NavigationHeaderStyles';

// Utilities
import StyleUtil from 'src/utils/StyleUtil';

export const NavigationHeader = (props) => {
  const { title, navigation } = props;
  const styles = StyleUtil.getStyles(NavigationHeaderStyles);

  return (
    <View>
      <TouchableHighlight
        onPress={() => navigation.goBack(null)}
        underlayColor={THEME}
      >
        <Icon
          size={30}
          name='arrow-back'
        />
      </TouchableHighlight>
      <PText>
        {title}
      </PText>
    </View>
  )
}

export default NavigationHeader;