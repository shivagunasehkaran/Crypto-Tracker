import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import * as ROUTES from './Routes';

const PublicStack = createStackNavigator();

export const PublicRoutes = () => {
  return (
    <PublicStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#375675',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <PublicStack.Screen
        key={ROUTES.pageNameDashBoard}
        name={ROUTES.pageNameDashBoard}
        component={ROUTES.pageDashBoard}
        options={{
          title: 'CryptoTracker Pro',
          headerShown: true,
          headerBackTitle: '',
          headerStatusBarHeight: 70,
        }}
      />
      <PublicStack.Screen
        key={ROUTES.pageNameAddCryptoCurrency}
        name={ROUTES.pageNameAddCryptoCurrency}
        component={ROUTES.pageAddCryptoCurrency}
        options={{
          title: '',
          headerShown: true,
          headerBackTitle: 'Back to list',
          headerStatusBarHeight: 70,
        }}
      />
    </PublicStack.Navigator>
  );
};
