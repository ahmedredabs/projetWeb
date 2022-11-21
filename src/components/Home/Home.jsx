import React from "react";
import { Text, View } from "react-native";
import Filter from '../Filter/Filter';
import Feed from '../Feed/Feed'

const Home = () => {
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
