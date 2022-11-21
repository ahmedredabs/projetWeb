import React, {useEffect, useState} from "react";
import {newSubreddits} from "../../service/RedditApiService"
import {Post} from "../Post/Post";

const New = () => {
    const [savedSubreddits, saveSubreddits] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        newSubreddits().then(data => {
            saveSubreddits(data.data.children)
            setLoaded(true)
        })
    },[savedSubreddits, loaded])

    return (loaded && savedSubreddits.map(post => <Post
        key={post.data.id} post={post.data}
    />));
};

export default New;
