import React from "react"
import {StyleSheet} from 'react-native';
import SearchSubreddits from './src/components/SearchSubreddits/SearchSubreddits'
import Subreddits from "./src/components/Subreddits/Subreddits";
import New from "./src/components/New/New";
import Home from './src/components/Home/Home'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="News" component={New}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
/**
 *
 <Stack.Screen name="Home" component={Home} />
 <Stack.Screen name="Subreddits" component={Subreddits}/>
 <Stack.Screen name="SearchSubreddits" component={SearchSubreddits}/>
 */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
