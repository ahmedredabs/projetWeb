import axios from 'axios';
import * as Endpoints from "../utils/config"

const searchSubreddits = (query) => {
    const request = axios.get(Endpoints.SEARCH_SUBREDDITS_ENDPOINT, {params: { query: query}} )
    return request.then(response => response.data)
}

const newSubreddits = () => {
    const request = axios.get(Endpoints.FILTER_SUBREDDITS_BY_NEW_ENDPOINT,{params: { limit: 20}})
    return request.then(response => response.data)
}

const topSubreddits = () => {
    const request = axios.get(Endpoints.GET_TOP_SUBREDDITS_ENDPOINT, {params: { limit: 20}})
    return request.then(response => response.data)
}

const bestSubreddits = () => {
    const request = axios.get(Endpoints.FILTER_SUBREDDITS_BY_BEST_ENDPOINT, {params: { limit: 20}})
    return request.then(response => response.data)
}

const hotSubreddits = () => {
    const request = axios.get(Endpoints.FILTER_SUBREDDITS_BY_HOT_ENDPOINT,{params: { limit: 20}})
    return request.then(response => response.data)
}

export {searchSubreddits, newSubreddits, topSubreddits, bestSubreddits, hotSubreddits}
