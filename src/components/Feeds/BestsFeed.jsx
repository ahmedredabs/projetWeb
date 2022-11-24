import {bestSubreddits} from "../../service/RedditApiService";
import {useEffect, useState} from "react";
import Best from "../Best/Best";

const BestsFeed = () => {
    const [savedSubreddits, saveSubreddits] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        bestSubreddits().then(data => {
            saveSubreddits(data.data.children.slice(0,50))
            setLoaded(true)
        })
    },[savedSubreddits, loaded])

    return loaded && <Best feed={savedSubreddits} />;
}

export default BestsFeed;