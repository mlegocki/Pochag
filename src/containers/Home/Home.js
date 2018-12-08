// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

// Types
import type { NavigationType, cameraRollType } from 'src/types/types';

// Components
import PText from 'src/components/Text/PText';
import PNavigationHeader from 'src/components/NavigationHeader/PNavigationHeader';
import PActivityIndicator from 'src/components/ActivityIndicator/PActivityIndicator';

// Utilities
import StyleUtil from 'src/utils/StyleUtil';

// Styling
import HomeStyles from 'src/containers/Home/HomeStyles';

import { getPhotos } from 'src/store/actions/cameraRollActions';

const styles = StyleUtil.getStyles(HomeStyles);

type PropsType = {
  navigation: NavigationType,
  cameraRoll: cameraRollType,
  getPhotos: Function
}

export class Home extends Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    const { navigation, cameraRoll } = this.props;
    const { loading, error, photos } = cameraRoll;

    return (
      <View>
        <PNavigationHeader
          navigation={navigation}
          icon={'menu'}
        />
        {loading &&
          <PActivityIndicator />
        }
        {!loading &&
          <View>
            <PText>
              List of Stories
            </PText>
          </View>
        }
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

export default connect(mapStateToProps, { getPhotos })(Home);