
import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Utilities
import StyleUtil from 'src/utils/StyleUtil';

// Styles
import AppStyles from 'src/AppStyles';

// Routing
import NavigationStack from 'src/routing/PostLoginDrawer';

// Store
import store from 'src/store/configureStore';

export default class App extends Component {
  render() {
    const styles = StyleUtil.getStyles(AppStyles);
    
    return (
      <Provider store={store}>
        <NavigationStack />
      </Provider>
    );
  }
}
