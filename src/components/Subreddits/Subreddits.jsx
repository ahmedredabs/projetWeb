import React, {useState} from "react";
import {Button, View} from 'react-native';
import {Form} from 'react-native-form-component';
import Storage from "../Storage/Storage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from "@react-navigation/native";

const Subreddits = () => {
    const {navigate} = useNavigation();
    const getObjectData = Storage.getObjectData

    const [subreddits, setSubreddits] = useState([])

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
                <Button title="add"/>
            </Form>
        </View>
    );

};

export default Subreddits;

