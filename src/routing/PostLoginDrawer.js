import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import PHome from 'src/containers/Home/PHome';
import PStories from 'src/containers/Stories/PStories';

const RouteConfig = {
  Home: {
    screen: PHome
  },
  Stories: { 
    screen: PStories
  }
};

const DrawerNavigatorConfig = {
  initialRouteName: 'Home',
  headerMode: 'none'
};

export default createAppContainer(createDrawerNavigator(RouteConfig, DrawerNavigatorConfig));