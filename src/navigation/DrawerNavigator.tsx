import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Screens } from './screens';
import BottomTabs from './BottomTabs';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator screenOptions={{ headerShown: false }}>
    <Drawer.Screen name={Screens.Home} component={BottomTabs} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
