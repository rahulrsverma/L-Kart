/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//Part 1 ----- HEADER Files



import React from 'react';

import 'react-native-gesture-handler';


import { createBottomTabNavigator } from 'react-navigation-tabs';

import { createAppContainer } from 'react-navigation';

import { Card, Icon, Badge, Avatar, Image, Button } from 'react-native-elements';


import Cart from './components/Tabs/Cart';
import Home from './components/Tabs/home';

import Login from './components/Tabs/login';

//import { Appbar } from 'react-native-paper';

//import {StackNavigator} from './stackNavigation'


//Part 2 -----   Navigation Files

export const AppNavigator = createBottomTabNavigator({

  //Button 1

  Home:
  {
    screen: Home,
    navigationOptions: {
      title: "Home",
      tabBarLabel: "Home",
      tabBarIcon: <Icon size={22} color="green" name="home" type='material-community' />,
      //tabBarIcon: <Icon size={22} color="green" name="cart" type='material-community' />,
      //tabBarIcon: <Icon size={22} color="green" name="music" type='material-community' />,
      //tabBarIcon: <Icon size={22} color="green" name="phone" type='material-community' />,
     
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        //navigation.popToTop();    //jumps back to the top route in the stack
        defaultHandler();
      }
    }
  },

  //Button 2

  Cart:
  {
    screen: Cart,
    navigationOptions: {
      title: "Profile",
      tabBarLabel: "Profile",
      tabBarIcon: <Icon size={22} color="green" name="account" type='material-community' />,
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        //navigation.popToTop();    //jumps back to the top route in the stack
        defaultHandler();
      }
    }
  },

  //Button 3

  Login:
  {
    screen: Login,
    navigationOptions: {
      title: "Profile",
      tabBarLabel: "Profile",
      tabBarIcon: <Icon size={33} color="white" name="account" type='material-community' />,
      tabBarOnPress: ({ navigation, defaultHandler }) => {
         //navigation.popToTop();    
        defaultHandler();
      }
    }
  },

},


 //Routing Done

{
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'white',
   showLabel: true,       //If true them show the name of title
    tabStyle: {
      backgroundColor: 'black',
    },
    style: {
      borderTopColor: 'green',
    }
  },
}


);
export default createAppContainer(AppNavigator);


