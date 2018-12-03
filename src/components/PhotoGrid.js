import { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';

export class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View>
        {
          photos.map(photo =>
            <Image
              src={photo}
            />
          )
        }
      </View>
    )
  }
}

const mapStateToProps = () => {
  return {

  }
};

export default connect(mapStateToProps)(Story);