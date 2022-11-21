import React, {useEffect, useState} from "react";
import {Text, ScrollView} from 'react-native';
import Storage from "../Storage/Storage";
import {newSubreddits} from "../../service/RedditApiService"

const New = () => {
    const storeObjectData = Storage.storeObjectData

    const [subreddit, setSubredditName] = useState('')
    const [savedSubreddits, saveSubreddits] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        newSubreddits().then(data => {
            saveSubreddits(data.data.children)
            setLoaded(true)
        })
    },[savedSubreddits, loaded])

    return (
        <ScrollView>
            <Text>
                Subreddit : {loaded && savedSubreddits[0].data.subreddit_name_prefixed}
            </Text>
            <Text>Title : {loaded && savedSubreddits[0].data.title}</Text>
        </ScrollView>
    );
};

export default New;
