import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screens } from './screens';
import ProductsScreen from '../screens/ProductsScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name={Screens.Home} component={HomeScreen} />
    <Tab.Screen name={Screens.Products} component={ProductsScreen} />
  </Tab.Navigator>
);

export default BottomTabs;
