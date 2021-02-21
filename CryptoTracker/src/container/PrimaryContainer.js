import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import * as NAVIGATION from '../routes/Navigator';
import * as NAV_ROUTES from '../routes/Routes';

const Stack = createStackNavigator();

class PrimaryContainer extends Component {
  render() {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          key={NAV_ROUTES.pageNamePublicStack}
          name={NAV_ROUTES.pageNamePublicStack}
          component={NAVIGATION.PublicRoutes}
        />
      </Stack.Navigator>
    );
  }
}

export default PrimaryContainer;
