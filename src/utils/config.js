/**
 * sans oath
 */
const FILTER_SUBREDDITS_BY_NEW_ENDPOINT = 'https://www.reddit.com/r/all/new/.json?limit=25'
const FILTER_SUBREDDITS_BY_BEST_ENDPOINT = 'https://www.reddit.com/r/all/best/.json?limit=25'
const FILTER_SUBREDDITS_BY_HOT_ENDPOINT = 'https://www.reddit.com/r/all/hot/.json?limit=25'
const GET_TOP_SUBREDDITS_ENDPOINT = 'https://www.reddit.com/r/all/top.json?limit=25'
const SEARCH_SUBREDDITS_ENDPOINT = 'https://api.reddit.com/api/search_reddit_names.json'


module.exports = {
  SEARCH_SUBREDDITS_ENDPOINT,
  FILTER_SUBREDDITS_BY_NEW_ENDPOINT,
  FILTER_SUBREDDITS_BY_BEST_ENDPOINT,
  FILTER_SUBREDDITS_BY_HOT_ENDPOINT,
  GET_TOP_SUBREDDITS_ENDPOINT
}