/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';

const Post = (props) => {
  const {post, fullDescription = false} = props;

  const navigation = useNavigation();
  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  };
  return (
    <ScrollView>
      <Pressable onPress={goToPostPage}>
        <View style={styles.container}>
          {/*<Image/> */}
          <Image source={{uri: post.image}} style={styles.image} />
          {/*<Bed & Room/> */}
          <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} badroom
          </Text>

          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>

          <Text style={styles.prices}>
            <Text style={styles.oldPrice}>${post.oldPrice}</Text>
            <Text></Text>
            <Text style={styles.price}>${post.newPrice}</Text>/ night
          </Text>

          <Text style={styles.totalPrice}>${post.totalPrice} total</Text>

          {fullDescription && (
            <Text style={styles.longDescription}>{post.description}</Text>
          )}
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default Post;
