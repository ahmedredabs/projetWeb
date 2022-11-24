import {randomSubreddits} from "../../service/RedditApiService";
import {useEffect, useState} from "react";
import Feed from "./Feed";

const RandomFeed = () => {
    const [savedSubreddits, saveSubreddits] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        randomSubreddits().then(data => {
            saveSubreddits(data.data.children.slice(0, 25))
            setLoaded(true)
        })
    }, [savedSubreddits, loaded])

    return loaded && <Feed feed={savedSubreddits}/>;
}

export default RandomFeed;