import { StyleSheet, Text, View } from 'react-native';
import RedditPost from "./components/RedditPost/RedditPost";
import tempData from "./components/Data/templateData.json";
import './App.css';


export default function App() {
  const dataPost = tempData;
  return (
    <div>
      <RedditPost dataPost={dataPost}/>
    </div>
    
  );
}