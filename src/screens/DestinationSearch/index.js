/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SugestionRow from './SugestionRow';
import {useEffect} from 'react';

const DestinationSearch = () => {
  const [destionationSearch, setDestinationSearch] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{height: 500}}>
        <GooglePlacesAutocomplete
          placeholder="Where are you going? "
          styles={{textInput: styles.textInput}}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            navigation.navigate('Guests');
          }}
          query={{
            key: 'AIzaSyA4L09zIuiruXwqxhP5XYopztJKEgOOmBo',
            language: 'pt-BR',
            types: '(cities)',
          }}
          suppressDefaultStyles
          renderRow={(item) => <SugestionRow item={item} />}
        />
      </View>
    </View>
  );
};

export default DestinationSearch;
