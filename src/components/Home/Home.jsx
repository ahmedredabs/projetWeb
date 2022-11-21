import React from "react";
import {Text, View} from "react-native";
import Filter from '../Filter/Filter';
import Feed from '../Feed/Feed'
import {useNavigation} from "@react-navigation/native";

const Home = () => {
    const {navigate} = useNavigation();
    var filter = 'all/' + Filter;

    return (
        <>
            <Text>Test</Text>
            <View>
                <View>
                    <Feed subreddit={filter}/>
                </View>
            </View>
        </>
    );

};

export default Home;
