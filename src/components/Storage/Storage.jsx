import React from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

//not used

  const storeObjectData = async (key, value) => {
    return AsyncStorage.setItem(key, JSON.stringify(value))
        .then(() => console.log('success!'))
        .catch(() => console.log('error!'));
}

const getObjectData = async (key) => {
    return AsyncStorage.getItem(key)
        .then(req => JSON.parse(req))
        .then(json => console.log(json))
        .catch(error => console.log('error!'));
}

export default {
    storeObjectData,
    getObjectData
};