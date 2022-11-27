import {useEffect, useState} from "react";
import {topSubreddits} from "../../service/RedditApiService"
import Feed from './Feed'

const TopFeed = () => {
    const [savedSubreddits, saveSubreddits] = useState([])

    const initialLoad = () => {
        topSubreddits().then(data => {
          saveSubreddits(data.data.children.slice(0, 25))
      })
      .catch(error => {
          console.error('Unable to load data.', error)
        })
    }
    useEffect(initialLoad, [])

    return (
        <Feed feed={savedSubreddits}/>
    )
}

export default TopFeed
