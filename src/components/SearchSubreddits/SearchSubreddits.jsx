import React, { useState, useEffect } from "react";
import { Text, TextInput, View } from 'react-native';
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
        <form onSubmit={handleAddSubredditName}>
            <div>
                Subreddit name: <input value={subreddit} onChange={handleSubredditNameChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    </View>
  );

};

export default SearchSubreddits;
