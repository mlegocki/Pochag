import React, { PureComponent } from 'react';
import { View } from 'react-native';
// Types
import type { photo } from '@types/types';

// Components 
import PPhoto from 'src/components/Photo/PPhoto';

// Styles
import styles from 'src/components/PhotoGridRow/PPhotoGridRowStyles';

// Utilities
import { FlatList } from 'react-native-gesture-handler';


type PropTypes = {
  photos: Array<photo>
}


export class PPhotoGridRow extends PureComponent<PropTypes> {
  constructor(props: PropTypes) {
    super(props);
  }

  _keyExtractor = item => item.image.uri

  _renderItem = ({ item }) => {
    return (
      <PPhoto
        photo={item}
      />
    );
  }

  _renderItemSeparatorComponent = () => {
    return (
      <View style={styles.imageSpacing}>
      </View>
    );
  }

  render() {
    const { photos } = this.props;

    return (
      <FlatList
        data={photos}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        ItemSeparatorComponent={this._renderItemSeparatorComponent}
        horizontal
      />
    );
  }
}

export default PPhotoGridRow;