import React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import SearchSubreddits from './src/components/SearchSubreddits/SearchSubreddits'
import Subreddits from "./src/components/Subreddits/Subreddits";
import Home from './src/components/Home/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import NewsFeed from "./src/components/Feeds/NewsFeed";
import BestsFeed from "./src/components/Feeds/BestsFeed";
import HotsFeed from "./src/components/Feeds/HotsFeed";

export default function App() {

    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Home" component={Home} options={({ navigation, route }) => ({
          headerTitle: (props) => <Text {...props} />,
          headerRight: () => (
            <Button title="Subreddits" />
          ),
        })}
      />
        <Stack.Screen name="Subreddits" component={Subreddits}/>
        <Stack.Screen name="SearchSubreddits" component={SearchSubreddits}/>
        <Stack.Screen name="Randoms" component={HotsFeed}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
/**
 *
 <Stack.Screen name="Home" component={Home} />

 <Stack.Screen name="News" component={NewsFeed}/>
 <Stack.Screen name="Bests" component={BestsFeed}/>
 <Stack.Screen name="Hots" component={HotsFeed}/>
 <Stack.Screen name="Randoms" component={HotsFeed}/>

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
