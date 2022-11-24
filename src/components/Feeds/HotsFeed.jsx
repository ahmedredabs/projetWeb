import {bestSubreddits, hotSubreddits} from "../../service/RedditApiService";
import {useEffect, useState} from "react";
import Best from "../Best/Best";

const HotsFeed = () => {
    const [savedSubreddits, saveSubreddits] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        hotSubreddits().then(data => {
            saveSubreddits(data.data.children.slice(0,50))
            setLoaded(true)
        })
    },[savedSubreddits, loaded])

    return loaded && <Best feed={savedSubreddits} />;
}

export default HotsFeed;