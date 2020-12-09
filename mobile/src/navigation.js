import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SearchScreen from './pages/Search';
import ProfileScreen from './pages/Profile'


const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator initialRouteName='Search'>
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
  }