import React, {useState} from "react";
import {Text, View} from 'react-native';
import Storage from "../Storage/Storage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from "@react-navigation/native";

const New = () => {
    const {navigate} = useNavigation();
    const storeObjectData = Storage.storeObjectData

    const [subreddit, setSubredditName] = useState('')
    const [savedSubreddits, saveSubreddits] = useState([])

    const handleAddSubredditName = (event) => {
        event.preventDefault();
        savedSubreddits.push(subreddit)
        AsyncStorage.setItem('savedSubreddits', JSON.stringify(savedSubreddits))
            .then(json => console.log('success!'))
            .catch(error => console.log('error!'));
        saveSubreddits(
            savedSubreddits
        );
    };

    return (
        <View>
                <Text>{subreddit}</Text>
        </View>
    );

};

export default New;
