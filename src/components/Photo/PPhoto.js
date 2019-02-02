// @flow

import React from 'react';
import { View, Image } from 'react-native';

// Types
import type { photoType } from '@types/types';

// Components

// Utilities

// Constants

// Styles
import styles from 'src/components/Photo/PPhotoStyles';

type PropTypes = {
	photo: photoType
};


export const PNavigationHeader = (props: PropTypes) => {
	const { photo } = props;
	const { image } = photo;
	return (
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
	);
};

export default PNavigationHeader;