import React from "react"
import { Text, Button } from 'react-native';
import SearchSubreddits from './src/components/SearchSubreddits/SearchSubreddits'
import Subreddits from "./src/components/Subreddits/Subreddits";
import Home from './src/components/Home/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
