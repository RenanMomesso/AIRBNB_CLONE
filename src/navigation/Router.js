/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import DestinationSearch from '../screens/DestinationSearch';
import Guests from '../screens/Guests';
import HomeTabNavigator from './HomeTagNavigator';
import SearchResults from '../screens/SearchResults';
import SearchResultsTab from './SearchResultsTabNavigator';
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        //to dont show header from page
        headerShown: true,
      }}>
      <Stack.Screen
        name={'Home'}
        component={HomeTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'Guests'}
        component={Guests}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'Search'}
        component={SearchResultsTab}
        options={{
          headerShown: true,
          title:'Places',
          headerTitleAlign:'center',
          headerTitleStyle:{
            backgroundColor:'red',
            padding:10,
            borderRadius:5,
            color:'#FAFAFA'
          }
        }}
      />
      <Stack.Screen
        name={'DestinationSearch'}
        component={DestinationSearch}
        options={{
          headerShown: true,
        }}
      />
       <Stack.Screen
          name={"Post"}
          component={PostScreen}
          options={{
            title: "Accommodation"
          }}
        />
    </Stack.Navigator>
  );
};

export default Router;
