/* eslint-disable prettier/prettier */
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../screens/home';
import SearchResultsTabNavigator from './SearchResultsTabNavigator'

const Stack = createStackNavigator();

const ExploreNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={'SearchResults'}
        component={SearchResultsTabNavigator}
        options={{
          title: 'Search your destination',
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
