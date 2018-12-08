import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

// Components
import PText from 'src/components/Text/PText';
import PNavigationHeader from 'src/components/NavigationHeader/PNavigationHeader';

// Utilities
import StyleUtil from 'src/utils/StyleUtil';

// Styling
import HomeStyles from 'src/containers/Home/HomeStyles';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    const styles = StyleUtil.getStyles(HomeStyles);
    const { navigation } = this.props;
    return (
      <View>
        <PNavigationHeader
          navigation={navigation}
          icon={'menu'}
        />
        <View>
          <PText>
            List of Stories
          </PText>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
};

export default connect(mapStateToProps)(Home);