import {StyleSheet} from 'react-native';
import New from "./src/components/New/New";
import Home from './src/components/Home/Home'
import Subreddits from "./src/components/Subreddits/Subreddits";
import SearchSubreddits from './src/components/SearchSubreddits/SearchSubreddits'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feed from "./src/components/Feed/Feed";

export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="News" component={Feed}/>
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
