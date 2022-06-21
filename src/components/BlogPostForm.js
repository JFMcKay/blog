import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm  = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return  <View>
                <Text style={styles.text}>Enter Title:</Text>

                <TextInput  value={title} style={styles.input} 
                            onChangeText={(text) => setTitle(text)} />

                <Text style={styles.text}>Enter Content:</Text>

                <TextInput  value={content} style={styles.input} 
                            onChangeText={(text) => setContent(text)} />
                <Button 
                title="Save Blog Post" 
                onPress={() => {
                    onSubmit(title, content);
                    }} 
                />
            </View>

};

// Can give the component a default value for the initialValues prop
BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

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

export default BlogPostForm;