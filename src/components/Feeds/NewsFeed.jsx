import {newSubreddits} from "../../service/RedditApiService";
import {useEffect, useState} from "react";
import Feed from "./Feed";

const NewsFeed = () => {
    const [savedSubreddits, saveSubreddits] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (!loaded) {
            newSubreddits().then(payload => {
                saveSubreddits(payload.data.children)
                setLoaded(true)
            }).catch(error => {
                console.error('Unable to load data.', error)
            })
        }
    }, [loaded])

    return loaded && <Feed feed={savedSubreddits}/>;
}

export default NewsFeed