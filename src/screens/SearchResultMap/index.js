/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Button,
  Pressable,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import places from '../../../assets/data/feed';
import CustomMaker from '../../components/CustomMaker';
import PostCarouselItem from '../../components/postCarouselItem';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MapViewDirections from 'react-native-maps-directions';

const SearchResultMap = (props) => {
  const width = useWindowDimensions().width;

  const [selected, setSelected] = useState(null);
  const [destination, setDestination] = useState({
    latitude: -23.743745,
    longitude: -46.3296952,
  });
  const [mapLoc, setMapLoc] = useState({
    name: places[1].title,
    latitude: places[1].coordinate.latitude,
    longitude: places[1].coordinate.longitude,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
    zoom: 16,
  });
  const flatlist = useRef();
  const map = useRef();
  const viewConfig = useRef({
    waitForInteraction: true,
    viewAreaCoveragePercentThreshold: 10,
  });
  const onViewChanged = useRef(({viewableItems}) => {
    const selectedPLace = viewableItems[0].item;
    console.log(selectedPLace);

    setSelected(selectedPLace.id);
  });

  useEffect(() => {
    if (!selected || !flatlist) {
      return;
    }
    const index = places.findIndex((place) => place.id === selected);
    flatlist.current.scrollToIndex({index});

    const selectedPLaces = places[index];
    const region = {
      latitude: selectedPLaces.coordinate.latitude,
      longitude: selectedPLaces.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
      zoom: 16,
    };
    map.current.animateToRegion(region);
    setDestination(region);
  }, [selected, mapLoc]);

  useEffect(() => {
    Geocoder.init('AIzaSyA4L09zIuiruXwqxhP5XYopztJKEgOOmBo', {
      language: 'pt-br',
    });
    getMyCurrentPosition();
  }, [getMyCurrentPosition]);

  const getMyCurrentPosition = useCallback(() => {
    Geolocation.getCurrentPosition(
      async (info) => {
        const geo = await Geocoder.from(
          info.coords.latitude,
          info.coords.longitude,
        );

        if (geo.results.length > 0) {
          const loc = {
            name: geo.results[0].formatted_address,

            latitude: info.coords.latitude,
            longitude: info.coords.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
            zoom: 16,
          };
          setMapLoc(loc);
          map.current.animateToRegion(mapLoc);
        }
      },
      (error) => {
        console.log(error);
      },
    );
  }, [mapLoc]);

  const handleDirectionsReady = (r) => {
    map.current.fitToCoordinates(r.coordinates, {
      edgePadding:{
        left:50,
        right:50,
        bottom:50,
        top:400
      }
    })
  }

  return (
    <View style={{height: '100%', width: '100%'}}>
      <MapView
        ref={map}
        provider={PROVIDER_GOOGLE}
        style={{height: '100%', width: '100%'}}
        initialRegion={mapLoc}>
        {places.map((place, index) => (
          <CustomMaker
            key={index}
            isSelected={place.id === selected}
            onPress={() => setSelected(place.id)}
            price={place.newPrice}
            coordinate={place.coordinate}
          />
        ))}
        <MapViewDirections
          origin={mapLoc}
          destination={destination}
          apikey={'AIzaSyA4L09zIuiruXwqxhP5XYopztJKEgOOmBo'}
          strokeWidth={3}
          strokeColor="black"
          onReady={handleDirectionsReady}
        />
      </MapView>
      <View style={{position: 'absolute', bottom: 10}}>
        <View style={{position: 'absolute', right: 10, bottom: 120}}>
          <Pressable onPress={getMyCurrentPosition}>
            <View style={{width: 50, height: 50, borderRadius: 5}}>
              <FontAwesome5 name="map-marker-alt" size={45} color="gray" />
            </View>
          </Pressable>
        </View>
        <Text style={{position: 'absolute', top: 30, left: 30}}>
          {mapLoc.name && mapLoc.name}
        </Text>
        <FlatList
          ref={flatlist}
          data={places}
          horizontal
          renderItem={({item}) => <PostCarouselItem post={item} />}
          keyExtractor={(item) => item.id}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};
export default SearchResultMap;
