import StyleUtil from 'src/utils/StyleUtil';
import { LARGE } from '@styles/styles';

const styles = {
  defaultContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    
    minHeight: 40,
    marginTop: 30
  },
  defaultIcon: {
    fontSize: 30
  },
  defaultTextContainer: {
    flex: 1,
    alignItems: 'center',
    paddingRight: 30
  },
  defaultText: {
    fontSize: LARGE 
  }
};

export default StyleUtil.getStyles(styles);