/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {Marker} from 'react-native-maps';

const CustomMaker = (props) => {
  const {coordinate, price, onPress, isSelected, imaging, name} = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress} key={props.key} >
   
      <View
        style={{
          backgroundColor: isSelected ? 'black' : 'white',
          padding: 5,
          borderColor: 'gray',
          borderRadius: 20,
        }}>
        <Text
          style={{
            color: isSelected ? 'white' : 'black',

            textAlign: 'center',
          }}>
          ${price}
        </Text>
      </View>
    </Marker>
  );
};
export default CustomMaker;
