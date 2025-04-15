import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from './screens';
import DrawerNavigator from './DrawerNavigator';
import ProductDetail from '../screens/ProductDetail';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Main" component={DrawerNavigator} />
    <Stack.Screen name={Screens.ProductDetail} component={ProductDetail} />
  </Stack.Navigator>
);

export default StackNavigator;
