/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Image,Pressable,useWindowDimensions} from 'react-native';
import styles from './styles';

const PostCarouselItem = (props) => {
  const width = useWindowDimensions().width;
  const {post} = props;
const navigation = useNavigation()
  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  };
  return (
    <Pressable onPress={goToPostPage} style={[styles.container, { width: width - 60}]}>
      <View style={styles.innerContainer}>
      <Image source={{uri: post.image}} style={styles.image} />
      <View style={{flex: 1, marginHorizontal: 10}}>
          {/* Bed & Bedroom  */}
          <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>

          {/* Type & Description */}
          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>

          {/*  Old price & new price */}
          <Text style={styles.prices}>
            <Text style={styles.price}>${post.newPrice} </Text>
            / night
          </Text>
        </View>
    </View>
    </Pressable>
  );
};

export default PostCarouselItem;
