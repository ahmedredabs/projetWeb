import React, {useEffect, useState} from "react";
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";

const Post = ({post}) => {
    const [url, setUrl] = useState()
    const [height, setHeight] = useState(0)
    const desiredWidth = Dimensions.get("screen").width

    useEffect(() => {
        if(post && post.url) {
            setUrl(post.url)
            Image.getSize(post.url, (width, height) => {
                setHeight(desiredWidth / width * height)
            }, () => {
                setUrl(null);
            });
        }
    }, [post, url])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    <Image
                        style={styles.thumbnail}
                        source={{uri: post.thumbnail}}
                    />
                    {post.title}
                </Text>
                <Text style={styles.text}>Author : {post.author}</Text>
                <Text style={styles.text}>Subreddit : {post.subreddit_name_prefixed}</Text>
            </View>
            
            <Text style={styles.text}>  
                <Image style={styles.votes} source={require('../../../assets/upvotesign.png')}/> {post.pwls} 
                <Image style={styles.votes} source={require('../../../assets/downvotesign.png')}/> {post.downs}
            
            </Text>
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
            {   (post.selftext !== '') && <Text style={styles.text}>{post.selftext}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 7,
        elevation: 1,
        borderWidth: 1,
        marginLeft: 4,
        marginRight: 4,
    },
    thumbnail: {
        width: 15,
        height: 15,
        resizeMode: 'stretch'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    url: {
        color: 'blue',
        fontSize: 8,
    },
    image: {

    },
    text: {
        color: 'black',
        fontSize: 10,
        textAlign: 'justify'
    },
    header:{
        backgroundColor: 'chocolate',
    },
    votes: {
        width: 10,
        height: 10
    }
})

export {Post};
