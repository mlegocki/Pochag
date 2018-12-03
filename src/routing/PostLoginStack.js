import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from 'src/containers/Home/Home';

const RouteConfig = {
  Home: {
    screen: Home
  }
}

const StackNavigatorConfig = {
  initialRouteName: 'Home',
  headerMode: 'none'
}

export default createAppContainer(createStackNavigator(RouteConfig, StackNavigatorConfig));