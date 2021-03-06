import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Foundation as Icon} from '@expo/vector-icons'

import SearchScreen from './pages/Search';
import ProfileScreen from './pages/Profile';
import DetailScreen from './pages/Detail';
import { Header } from 'react-native/Libraries/NewAppScreen';


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
// const icons = {
//   Search: {
//       lib: Foundation,
//       name: 'map'
//   },
//   Profile: {
//       lib: Feather,
//       name: 'user'
//   },
  
// }

function SearchTabs(){
  return (
    <Tab.Navigator initialRouteName='Search' screenOptions={({ route }) => ({
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
        <Stack.Navigator>
          <Stack.Screen name="Search" component={SearchTabs} options={{headerShown:false}}/>
          <Stack.Screen name="Detail" component={DetailScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}