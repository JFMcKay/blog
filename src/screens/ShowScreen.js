import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    // Get the item from the navigation state that was passed in
    // const id = navigation.getParam('id');

    const { state } = useContext(BlogContext);
    // use find helper function on the state array to find the item with the id
    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'));

    return  <View style={styles.container} >
                <Text style={styles.title} >{blogPost.title}</Text>
                <Text style={styles.post} >{blogPost.content}</Text>
            </View>
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
                <AntDesign style={styles.icon} name="edit" color="black" />
            </TouchableOpacity>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    post: {
        fontSize: 14,
        paddingVertical: 10,
    },
    icon: {
        padding: 15,
        fontSize: 32,
    },
});

export default ShowScreen;