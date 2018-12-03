import { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

export class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <View>
        <Text>
          Story Title
        </Text>
        <Text>
          Story Date
        </Text>
        <Text>
          Story Photos
        </Text>
      </View>
    )
  }

}

const mapStateToProps = () => {
  return {

  }
};

export default connect(mapStateToProps)(Story);