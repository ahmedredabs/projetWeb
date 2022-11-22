/**
 * sans oath
 */
const FILTER_SUBREDDITS_BY_NEW_ENDPOINT = 'https://www.reddit.com/r/all/new/.json'
const GET_TOP_SUBREDDITS_ENDPOINT = 'https://www.reddit.com/r/all/top/.json'


/**
 * avec oath
 */
const SEARCH_SUBREDDITS_ENDPOINT = 'https://www.oauth.reddit.com/api/search_subreddits'


module.exports = {
  SEARCH_SUBREDDITS_ENDPOINT,
  FILTER_SUBREDDITS_BY_NEW_ENDPOINT, 
  GET_TOP_SUBREDDITS_ENDPOINT
}