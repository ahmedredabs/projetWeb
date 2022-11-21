//const Person = require('../models/person')
import axios from 'axios';
import * as Endpoints from "../utils/config"

const searchSubreddits = (query) => {
    const request = axios.get(Endpoints.REDDIT_API_URL + Endpoints.SEARCH_SUBREDDITS_ENDPOINT)
    return request.then(response => response.data)
  }

export default { searchSubreddits }