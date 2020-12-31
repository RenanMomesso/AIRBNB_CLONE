/* eslint-disable prettier/prettier */
import React from 'react'
import { View,Text } from 'react-native'
import Post from '../../components/Post'
import Places from '../../../assets/data/feed'
import { useRoute } from '@react-navigation/native'


const PostScreen = (props) => {

    const route = useRoute()    
    const post = Places.find(place => place.id === route.params.postId)

return (
<View>
<Post post={post} fullDescription={true} />
</View>
)}
export default PostScreen