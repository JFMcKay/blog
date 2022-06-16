import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const CreateScreen = () => { 
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    // Create a reference to the context

    const { addBlogPost } = useContext(BlogContext);

    return  <View>
                <Text style={styles.text}>Enter Title:</Text>

                <TextInput  value={title} style={styles.input} 
                            onChangeText={(text) => setTitle(text)} />

                <Text style={styles.text}>Enter Content:</Text>

                <TextInput value={content} style={styles.input} 
                            onChangeText={(text) => setContent(text)} />

                <Button title="Add Blog Post" onPress={() => addBlogPost(title, content)} />
            </View>
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 5,
    },
    text: {
        fontSize: 18,
        margin: 5,
    }
    
});

export default CreateScreen;