import React from "react";
import {Post} from "../Post/Post";
import {ScrollView} from "react-native";

const Feed = ({feed}) => {

    return (
        <ScrollView>
            {console.log(feed)}
            {feed.map(e => <Post key={e.data.id} post={e.data} />)}
        </ScrollView>
    );
};

export default Feed;
