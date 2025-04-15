/**
 * @format
 */
import 'react-native-gesture-handler'; // 👈 VERY IMPORTANT: at the top
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const RootApp = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <App />
  </GestureHandlerRootView>
);

AppRegistry.registerComponent(appName, () => RootApp);
