
import React, { useState, useEffect } from "react";
import { Button, Text, TextInput, View } from 'react-native';
import { Form, FormItem } from 'react-native-form-component';
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
        <Form onSubmit={handleViewSubreddits}>
          <FormItem />
          <Button title="add"/>
        </Form>
    </View>
  );

};

export default Subreddits;

