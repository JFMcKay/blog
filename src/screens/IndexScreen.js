import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons';


const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost, getBlogPosts } = useContext(BlogContext);
    // Called after the first render.
    useEffect(() => {
        getBlogPosts();

        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        })

        return () => {
            // Called before the component is removed from the DOM. Prevents memory leaks.
            listener.remove();
        }
    }, []);

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.id}
                renderItem={({ item }) => {
                    return  <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.container}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => {deleteBlogPost(item.id)}}>
                                    <AntDesign style={styles.icon} name="delete" />
                                </TouchableOpacity>
                            </View>
                            </TouchableOpacity>
                }}
            />
        </View>
    )
}

// HEADER STUFF
IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <AntDesign style={styles.icon} name="plus" color="black" />
            </TouchableOpacity>
        )
    }

}

export default IndexScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 18,
    },
    icon: {
        padding: 15,
        fontSize: 24,
    }

})

// return {
//     headerRight: () => (
//       <TouchableOpacity onPress={() => navigation.navigate('Create')}>
//         <Feather name="plus" size={30} />
//       </TouchableOpacity>
//     ),
//   };