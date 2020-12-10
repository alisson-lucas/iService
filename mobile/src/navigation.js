import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation, Feather } from '@expo/vector-icons'

import SearchScreen from './pages/Search';
import ProfileScreen from './pages/Profile'


const Tab = createBottomTabNavigator();

const icons = {
  Search: {
      lib: Foundation,
      name: 'map'
  },
  Profile: {
      lib: Feather,
      name: 'user'
  },
  
}

export default function Navigation() {
    return (
        <Tab.Navigator initialRouteName='Search' screenOptions={({ route, navigation }) => ({
          tabBarIcon: ({ color, size, focused }) => {
              const { lib: Icon, name} = icons[route.name];
              return <Icon name={name} size={size} color={color} />;
          },
          })}
          tabBarOptions={{ style: {
          backgroundColor: '#fff',
          borderTopColor: 'rgba(255, 255, 255, 0.2)'
          },
          activeTintColor:'#000080'}}
        >
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
  }