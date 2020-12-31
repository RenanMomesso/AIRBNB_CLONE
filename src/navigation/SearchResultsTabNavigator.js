/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import SearchResultMap from '../screens/SearchResultMap';
const Tab = createMaterialTopTabNavigator();

const SearchResultsTab = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name="list" component={SearchResults} />
      <Tab.Screen name="map" component={SearchResultMap} />
    </Tab.Navigator>
  );
};
export default SearchResultsTab;
