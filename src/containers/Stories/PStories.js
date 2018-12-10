// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

// Types
import type { NavigationType } from 'src/types/types';

// Components
import PText from 'src/components/Text/PText';
import PNavigationHeader from 'src/components/NavigationHeader/PNavigationHeader';

// Utilities
import StyleUtil from 'src/utils/StyleUtil';

// Styling
import PStoriesStyles from 'src/containers/Stories/PStoriesStyles';

// Constants
import * as CONSTANTS from 'src/assets/strings/strings';

const styles = StyleUtil.getStyles(PStoriesStyles);

type PropsType = {
  navigation: NavigationType,
}

export class Stories extends Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <PNavigationHeader
          navigation={navigation}
          icon={'menu'}
          title={CONSTANTS.storyNavHeader}
        />
        <PText>
          List of Stories
        </PText>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { cameraRoll } = state;
  return {
    cameraRoll
  };
};

export default connect(mapStateToProps)(Stories);