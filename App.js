import React from "react"
import SearchSubreddits from './src/components/SearchSubreddits/SearchSubreddits'
import Subreddits from "./src/components/Subreddits/Subreddits";
import {NavigationContainer} from '@react-navigation/native';
import NewsFeed from "./src/components/Feeds/NewsFeed";
import BestsFeed from "./src/components/Feeds/BestsFeed";
import HotsFeed from "./src/components/Feeds/HotsFeed";
import TopsFeed from './src/components/Feeds/TopsFeed';
import {createDrawerNavigator} from "@react-navigation/drawer";

export default function App() {

    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="News" screenOptions={{headerTitleAlign: 'center'}}>
                <Drawer.Screen name="New posts" component={NewsFeed}/>
                <Drawer.Screen name="Hot posts" component={HotsFeed}/>
                <Drawer.Screen name="Best posts" component={BestsFeed}/>
                <Drawer.Screen name="Top posts" component={TopsFeed}/>
                <Drawer.Screen name="Subreddits" component={Subreddits}/>
                <Drawer.Screen name="Add Subreddit" component={SearchSubreddits}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}