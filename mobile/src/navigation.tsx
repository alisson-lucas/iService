import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// import { AntDesign as Icon} from '@expo/vector-icons'
import { AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons'

import SearchScreen from './pages/Search';
import ProfileScreen from './pages/Profile';
import DetailScreen from './pages/Detail';
import FavoriteScreen from './pages/Favorite';
import LoginScreen from './pages/Login';
import UserSignScreen from './pages/UserSignIn';
import updateUser from './pages/updateUser';
import { Header } from 'react-native/Libraries/NewAppScreen';


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const icons : any = {
  Search: {
    lib: AntDesign,
    name: 'home',
    size: 30
  },
  Profile: {
    lib: FontAwesome,
    name: 'user-o',
    size: 28
  },
  
}


function SearchTabs(){

  return (
    <Tab.Navigator initialRouteName='Search' screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {
        // let iconName;
        // if (route.name === "Search") {
        //   iconName = "user";
        // } else if (route.name === "Profile") {
        //   iconName = "user";
        // }

        const { lib: Icon, name, size} = icons[route.name];
        return <Icon name={name} size={size} color={color} />;
      },
        })}
        tabBarOptions={{ style: {
        backgroundColor: '#fff',
        borderTopColor: '#C0C0C0',
        },
        showLabel: false,
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
      {/* <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/> */}
      <Stack.Screen name="Search" component={SearchTabs} options={{headerShown:false}}/>
      <Stack.Screen name="Detail" component={DetailScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Favorite" component={FavoriteScreen} />
      <Stack.Screen name="UserSignIn" component={UserSignScreen} options={{headerShown:false}}/>
      <Stack.Screen name="UpdateUser" component={updateUser} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}