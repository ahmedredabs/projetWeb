import {bestSubreddits} from "../../service/RedditApiService";
import {useEffect, useState} from "react";
import Feed from "./Feed";

const BestsFeed = () => {
    const [savedSubreddits, saveSubreddits] = useState([])

    const initialLoad = () => {
        bestSubreddits().then(data => {
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

export default BestsFeed