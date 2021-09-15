import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Foundation as Icon} from '@expo/vector-icons'
import { AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons'

import SearchScreen from './pages/Search';
import ProfileScreen from './pages/Profile';
import DetailScreen from './pages/Detail';
import FavoriteScreen from './pages/Favorite';
import UserLoginScreen from './pages/Login';
import UserRegisterScreen from './pages/Register';
import updateUser from './pages/updateUser';
import ForgotPassword from './pages/forgotPassword';
import Menu from './pages/Menu'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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

export const DrawerMenu = () => {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

const SearchTabs = () => {
  return (
    <Tab.Navigator initialRouteName='Login' screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {
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
      <Stack.Screen name="UserLogin" component={UserLoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Search" component={SearchTabs} options={{headerShown:false}}/>
      <Stack.Screen name="Detail" component={DetailScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Favorite" component={FavoriteScreen} />
      <Stack.Screen name="UserRegister" component={UserRegisterScreen} options={{headerShown:false}}/>
      <Stack.Screen name="UpdateUser" component={updateUser} options={{headerShown:false}}/>
      <Stack.Screen name="Menu" component={Menu} options={{headerShown:false}}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}