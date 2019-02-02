import React from 'react';
import { View, Image } from 'react-native';

// Types
import type { photo } from '@types/types';

// Styles
import PPhotoGridStyles from 'src/components/PhotoGrid/PPhotoGridStyles';

// Utilities
import StyleUtil from 'src/utils/StyleUtil';


type PropTypes = {
  photos: Array<photo>
}

const styles = StyleUtil.getStyles(PPhotoGridStyles);

export const PPhotoGrid = (props: PropTypes) => {
  const { photos } = props;

  return (
    <View style={styles.defaultContainer}>
      {
        photos.map(({ image }) =>
          <View
            style={styles.defaultImageContainer}
            key={image.filename}
          >
            <Image
              style={styles.defaultImage}
              source={{ uri: image.uri }}
              resizeMode='stretch'
            />
          </View>
        )
      }
    </View>
  );
};

export default PPhotoGrid;