// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

// Types
import type { NavigationType, cameraRollType } from 'src/types/types';

// Components
import PText from 'src/components/Text/PText';
import PPhotoGrid from 'src/components/PhotoGrid/PPhotoGrid';
import PNavigationHeader from 'src/components/NavigationHeader/PNavigationHeader';
import PActivityIndicator from 'src/components/ActivityIndicator/PActivityIndicator';

// Utilities

// Styling
import styles from 'src/containers/Home/PHomeStyles';

import { getPhotos } from 'src/store/actions/cameraRollActions';


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
    const photosLoaded = photos.length > 0 && !loading;
    
    return (
      <View>
        <PNavigationHeader
          navigation={navigation}
          icon={'menu'}
        />
        {loading &&
          <PActivityIndicator />
        }
        {photosLoaded && (
          <View>
            <PText>
              List of Stories
            </PText>
            <PPhotoGrid
              photos={photos}
            />
          </View>
        )}
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