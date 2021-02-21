/**
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import React, {Suspense} from 'react';
import {ActivityIndicator, AppRegistry, View} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import store from './src/store';

AppRegistry.registerComponent(appName, () => {
  return () => (
    <Provider store={store}>
      <NavigationContainer>
        <View style={{flex: 1}}>
          <Suspense
            fallback={
              <View
                // style={tw('flex-1 justify-center')}
                className="justify-items-center">
                <ActivityIndicator size="large" color={'red'} />
              </View>
            }>
            <App />
          </Suspense>
        </View>
      </NavigationContainer>
    </Provider>
  );
});
