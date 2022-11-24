import React from "react";
import {Post} from "../Post/Post";
import {ScrollView, StyleSheet} from "react-native";

const Feed = ({feed}) => {

    return (
        <ScrollView style={styles.feed}>
            {feed.map(e => <Post key={e.data.id} post={e.data} />)}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    feed: {
        
    }
});

export default Feed;
