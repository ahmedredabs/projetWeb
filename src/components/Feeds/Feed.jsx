import React from "react";
import {Post} from "../Post/Post";
import {StatusBar, SafeAreaView, FlatList, StyleSheet} from "react-native";

const Feed = ({feed}) => {

    return (
        <SafeAreaView style={styles.container}>
            <FlatList style={styles.feed} data={feed} 
            renderItem={({item}) => (
                <Post key={item.data.id} post={item.data} />
              )}
            keyExtractor={(item, index) => index}
            extraData={feed}>
                {feed.map(e => <Post key={e.data.id} post={e.data} />)}
            </FlatList>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    feed: {
        
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    }
});

export default Feed;
