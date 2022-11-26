
import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList, StyleSheet, Text, TextInput, View, Button, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Config from "../../utils/config"
import { useIsFocused } from "@react-navigation/native";

const Subreddits = ({navigation}) => {
  const [ subreddits, setSubreddits ] = useState([])
  const isFocused = useIsFocused();

  const initialLoad = () => {

    if(isFocused){ 
      AsyncStorage.getItem(Config.SAVED_SUBREDDITS_KEY)
      .then(req => JSON.parse(req))
      .then(json => setSubreddits(json))
      .catch(error => console.log('Unable to load data!'))
  }
  }
  useEffect(initialLoad, [])

  useEffect(() => { 
    if(isFocused){
      initialLoad();
    }     
  }, [ isFocused]);

  const handleDeleteSubredditName = (item) => {
    var index = subreddits.indexOf(item);
    const nextList = [...subreddits];
    if (index !== -1) {
      nextList.splice(index, 1);
    }
    AsyncStorage.setItem(Config.SAVED_SUBREDDITS_KEY, JSON.stringify(nextList))
    .then(json =>setSubreddits(nextList))
    .then(er => console.log(er))

  }

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate('Add Subreddit')} title="Add" />
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center'}}>
      <SafeAreaView style={styles.container}>
      <FlatList
        data={subreddits}
        renderItem={({item}) => (
          <View >
            <Text style={styles.item}> {item}</Text>
            <Button onPress={() =>handleDeleteSubredditName(item)} title="Delete"></Button>
          </View>
        )}
        keyExtractor={(item, index) => index}
        extraData={subreddits}
      />
    </SafeAreaView>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#ffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Subreddits;

