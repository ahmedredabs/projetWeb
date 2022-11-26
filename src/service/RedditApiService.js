//const Person = require('../models/person')
import axios from 'axios';
import * as Endpoints from "../utils/config"

const searchSubreddits = (query) => {
    const request = axios.get(Endpoints.SEARCH_SUBREDDITS_ENDPOINT, {params: { query: query}} )
    return request.then(response => response.data)
  }

export { searchSubreddits }