import {newSubreddits} from "../../service/RedditApiService";
import {useEffect, useState} from "react";
import New from "../New/New";

const NewsFeed = () => {
    const [savedSubreddits, saveSubreddits] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        newSubreddits().then(data => {
            saveSubreddits(data.data.children.slice(0,50))
            setLoaded(true)
        })
    },[savedSubreddits, loaded])

    return loaded && <New feed={savedSubreddits} />;
}

export default NewsFeed;