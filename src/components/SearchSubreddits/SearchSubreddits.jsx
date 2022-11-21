import React, { useState, useEffect } from "react";
import { Button, Text, TextInput, View } from 'react-native';
import { Form, FormItem } from 'react-native-form-component';
import Storage from "../Storage/Storage";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchSubreddits = () => {
    const storeObjectData = Storage.storeObjectData

  const [ subreddit, setSubredditName ] = useState('')
  const [ savedSubreddits, saveSubreddits ] = useState([])

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

  const handleSubredditNameChange = (event) => {
    setSubredditName(event.target.value);
  };

  return (
    <View>
        <Form onSubmit={handleAddSubredditName}>
                <Text>Subreddit name: </Text>
                <TextInput value={subreddit} onChange={handleSubredditNameChange} />
                <Button type="submit" title="add" />
        </Form>
    </View>
  );

};

export default SearchSubreddits;
