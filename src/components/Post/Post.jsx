import React, {useEffect, useState} from "react";
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";

const Post = ({post}) => {
    const [height, setHeight] = useState(0)
    const desiredWidth = Dimensions.get("screen").width

    useEffect(() => {
        if (post && post.url && (post.url.endsWith('.jpg') || post.url.endsWith('.png'))) {
            Image.getSize(post.url, (width, height) => {
                setHeight(desiredWidth / width * height)
            });
        }
    }, [post])

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                <Image
                    style={styles.thumbnail}
                    source={{uri: post.thumbnail}}
                />
                {post.title}
            </Text>
            <Text style={styles.author}>Author : {post.author}</Text>
            <Text style={styles.subreddit}>Subreddit : {post.subreddit_name_prefixed}</Text>
            {
                (height > 0) &&
                <Image
                    style={{
                        width: desiredWidth,
                        maxWidth: '100%',
                        height: height
                    }}
                    source={{uri: post.url}}
                    resizeMode="contain"
                />
            }
            <Text style={styles.text}>+ {post.pwls} - {post.downs}</Text>
            {(post.selftext !== '') && <Text style={styles.text}>{post.selftext}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 7,
        marginBottom: 7,
        elevation: 1,
        borderWidth: 1
    },
    thumbnail: {
        width: 15,
        height: 15,
        resizeMode: 'stretch'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17,
        borderBottomColor: 'red',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    url: {
        color: 'blue',
        fontSize: 8,
    },
    image: {},
    author: {
        color: 'grey',
        fontSize: 8,
    },
    subreddit: {
        color: 'grey',
        fontSize: 8,
    },
    text: {
        color: 'black',
        fontSize: 10,
    }
})

export {Post};