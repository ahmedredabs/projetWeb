
import React, { useState, useEffect } from "react";
import { Text, TextInput, View } from 'react-native';
import Storage from "../Storage/Storage";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Subreddits = () => {
    const getObjectData = Storage.getObjectData

  const [ subreddits, setSubreddits ] = useState([])

  const handleViewSubreddits = (event) => {
    event.preventDefault();
    AsyncStorage.getItem('savedSubreddits')
    .then(req => JSON.parse(req))
    .then(json => {
        console.log(json)
        setSubreddits(json)
    })
    .catch(error => console.log('error!'))
  };

  return (
    <View>
        <form onSubmit={handleViewSubreddits}>
            <div>
                <button type="Get">add</button>
            </div>
        </form>
    </View>
  );

};

export default Subreddits;

