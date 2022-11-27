import {bestSubreddits} from "../../service/RedditApiService";
import {useEffect, useState} from "react";
import Feed from "./Feed";

const BestsFeed = () => {
    const [savedSubreddits, saveSubreddits] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (!loaded) {
            bestSubreddits().then(payload => {
                saveSubreddits(payload.data.children)
                setLoaded(true)
            }).catch(error => {
                console.error('Unable to load best subreddits\' page.', error)
            })
        }
    }, [savedSubreddits, loaded])

    return loaded && <Feed feed={savedSubreddits}/>
}

export default BestsFeed