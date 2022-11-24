import {newSubreddits} from "../../service/RedditApiService";
import {useEffect, useState} from "react";
import Feed from "./Feed";

const NewsFeed = () => {
    const [savedSubreddits, saveSubreddits] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        newSubreddits().then(data => {
            saveSubreddits(data.data.children.slice(0, 50))
            setLoaded(true)
        })
    }, [savedSubreddits, loaded])

    return loaded && <Feed feed={savedSubreddits}/>;
}

export default NewsFeed;