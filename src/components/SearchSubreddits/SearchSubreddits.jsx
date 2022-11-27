import React, { useState, useEffect } from "react";
import { StatusBar, SafeAreaView, FlatList, Text, TextInput, View, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Config from "../../utils/config"
import {searchSubreddits} from "../../service/RedditApiService"

const SearchSubreddits = () => {
  const [ savedSubreddits, setSavedSubreddits ] = useState([])
  const [ searchedSubreddits, setSearchedSubreddits ] = useState([])
  const [query, setQuery] = React.useState("");

  const initialLoad = () => {
    AsyncStorage.getItem(Config.SAVED_SUBREDDITS_KEY)
    .then(req => JSON.parse(req))
    .then(json => {
      if(json != null){
        setSavedSubreddis(json)
      }
    })
    .catch(error => console.log('Unable to load data!'))
  }
  useEffect(initialLoad, [])
  
  const handleAddSubredditName = (item) => {
    var newArray = [];
    if(savedSubreddits!=null){
      newArray = savedSubreddits.concat(item)
    }else{
      newArray = newArray.push(item)
    }
    setSavedSubreddits(newArray)
    AsyncStorage.setItem(Config.SAVED_SUBREDDITS_KEY, JSON.stringify(newArray))
    .then(json => console.log('success!'))
    .catch(error => console.log(error));
  };

  const handleRequest = () => {
    searchSubreddits(query).then(
      data => setSearchedSubreddits(data.names)
    ).catch(error => console.log(error))
  }

  return (
    <View >
      <TextInput style={styles.input} onChangeText = {setQuery} value={query} />
      <Button  onPress={handleRequest} title="search"/>
      <SafeAreaView style={styles.container}>
      <FlatList
        data={searchedSubreddits}
        renderItem={({item}) => (
          <View >
            <Text style={styles.item}> {item}</Text>
            <Button onPress={() =>handleAddSubredditName(item)} title="Add"></Button>
          </View>
        )}
        keyExtractor={(item, index) => index}
        extraData={searchedSubreddits}
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    backgroundColor: '#ffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32,
  }
})

export default SearchSubreddits;
