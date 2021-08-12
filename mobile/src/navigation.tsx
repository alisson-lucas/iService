import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Foundation as Icon} from '@expo/vector-icons'

import SearchScreen from './pages/Search';
import ProfileScreen from './pages/Profile';
import DetailScreen from './pages/Detail';
import FavoriteScreen from './pages/Favorite';
import UserLoginScreen from './pages/Login';
import UserRegisterScreen from './pages/Register';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SearchTabs = () => {
  return (
    <Tab.Navigator initialRouteName='Login' screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === "Search") {
          iconName = "map";
        } else if (route.name === "Search") {
          iconName = "user";
        }
        return <Icon name="map" size={size} color={color} />;
      },
        })}
        tabBarOptions={{ style: {
        backgroundColor: '#fff',
        borderTopColor: '#C0C0C0',
        },
        activeTintColor:'#000080'}}
      >
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="UserLogin" component={UserLoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Search" component={SearchTabs} options={{headerShown:false}}/>
      <Stack.Screen name="Detail" component={DetailScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Favorite" component={FavoriteScreen} />
      <Stack.Screen name="UserRegister" component={UserRegisterScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}