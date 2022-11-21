import {StyleSheet} from 'react-native';
import TopPosts from "../projetWeb/src/components/TopPosts/TopPosts"
import Home from '../projetWeb/src/components/Home/Home'
import Subreddits from "../projetWeb/src/components/Subreddits/Subreddits";
import SearchSubreddits from '../projetWeb/src/components/SearchSubreddits/SearchSubreddits'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="TopPosts" component={TopPosts}/>
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
