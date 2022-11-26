import {useEffect, useState} from "react";
import { ScrollView } from "react-native";
import {topSubreddits} from "../../service/RedditApiService"
import Feed from './Feed'

const TopFeed = () => {
    const [savedSubreddits, saveSubreddits] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        topSubreddits().then(data => {
            saveSubreddits(data.data.children.slice(0,25))
            setLoaded(true)
        })
    },[savedSubreddits, loaded])

    return (
    <ScrollView>
        {loaded && <Feed feed={savedSubreddits}/>}
    </ScrollView>)
}

export default TopFeed
