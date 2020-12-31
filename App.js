/* eslint-disable prettier/prettier */


import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/navigation/Router'

import HomeScreen from './src/screens/home'
import Entype from 'react-native-vector-icons/Entypo'
import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchResults from './src/screens/SearchResults';
import DestinationSearch from './src/screens/DestinationSearch';
import Guests from './src/screens/Guests';


const App = () => {
  return (
    
     <NavigationContainer>
       <Router/>
     </NavigationContainer>
     
  );
};

export default App;
