import axios from 'axios';
import * as Endpoints from "../utils/config"

const searchSubreddits = () => {
    const request = axios.get(Endpoints.SEARCH_SUBREDDITS_ENDPOINT)
    return request.then(response => response.data)
}

const newSubreddits = () => {
    const request = axios.get(Endpoints.FILTER_SUBREDDITS_BY_NEW_ENDPOINT)
    return request.then(
        response => {
            return Promise.resolve(response.data)
        }
    )
}

const bestSubreddits = () => {
    const request = axios.get(Endpoints.FILTER_SUBREDDITS_BY_BEST_ENDPOINT)
    return request.then(
        response => {
            return Promise.resolve(response.data)
        }
    )
}

const hotSubreddits = () => {
    const request = axios.get(Endpoints.FILTER_SUBREDDITS_BY_HOT_ENDPOINT)
    return request.then(
        response => {
            return Promise.resolve(response.data)
        }
    )
}

const randomSubreddits = () => {
    const request = axios.get(Endpoints.FILTER_SUBREDDITS_BY_RANDOM_ENDPOINT)
    return request.then(
        response => {
            return Promise.resolve(response.data)
        }
    )
}

export {searchSubreddits, newSubreddits, bestSubreddits, hotSubreddits, randomSubreddits}