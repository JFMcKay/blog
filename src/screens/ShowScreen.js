import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
    // Get the item from the navigation state that was passed in
    // const id = navigation.getParam('id');

    const { state } = useContext(BlogContext);
    // use find helper function on the state array to find the item with the id
    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'));

    return  <View>
                <Text>{blogPost.title}</Text>
                <Text>{blogPost.content}</Text>
            </View>
}

const styles = StyleSheet.create({

});

export default ShowScreen;