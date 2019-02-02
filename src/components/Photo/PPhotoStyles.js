import StyleUtil from 'src/utils/StyleUtil';
import { width, BLACK } from '@styles/styles';

const styles = {
	defaultImageContainer: {
		width: width / 3 - 4,
		height: width / 3 - 4,
		margin: 2,
		shadowOffset: { width: 2, height: 2 },
		shadowColor: BLACK,
		shadowOpacity: 0.3,
		shadowRadius: 2
	},
	defaultImage: {
		flex: 1
	}
};

export default StyleUtil.getStyles(styles);