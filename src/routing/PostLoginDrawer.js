import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import Home from 'src/containers/Home/Home';

const RouteConfig = {
  Home: {
    screen: Home
  }
}

const DrawerNavigatorConfig = {
  initialRouteName: 'Home',
  headerMode: 'none'
}

export default createAppContainer(createDrawerNavigator(RouteConfig, DrawerNavigatorConfig));