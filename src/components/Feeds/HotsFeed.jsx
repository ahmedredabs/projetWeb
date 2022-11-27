import {hotSubreddits} from "../../service/RedditApiService";
import {useEffect, useState} from "react";
import Feed from "./Feed";

const HotsFeed = () => {
    const [savedSubreddits, saveSubreddits] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (!loaded) {
            hotSubreddits().then(payload => {
                saveSubreddits(payload.data.children)
                setLoaded(true)
            }).catch(error => {
                console.error('Unable to load hot subreddits\' page.', error)
            })
        }
    }, [loaded])

    return loaded && <Feed feed={savedSubreddits}/>
}

export default HotsFeed