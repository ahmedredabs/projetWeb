/**
 * sans oath
 */
const FILTER_SUBREDDITS_BY_NEW_ENDPOINT = 'https://www.reddit.com/r/all/new/.json'
const FILTER_SUBREDDITS_BY_BEST_ENDPOINT = 'https://www.reddit.com/r/all/best/.json'
const FILTER_SUBREDDITS_BY_HOT_ENDPOINT = 'https://www.reddit.com/r/all/hot/.json'
const FILTER_SUBREDDITS_BY_RANDOM_ENDPOINT = 'https://www.reddit.com/r/all/random/.json'
const GET_TOP_SUBREDDITS_ENDPOINT = 'https://www.reddit.com/r/all/top.json?limit=10'

const SEARCH_SUBREDDITS_ENDPOINT = 'https://api.reddit.com/api/search_reddit_names.json'


module.exports = {
  SEARCH_SUBREDDITS_ENDPOINT,
  FILTER_SUBREDDITS_BY_NEW_ENDPOINT,
  FILTER_SUBREDDITS_BY_BEST_ENDPOINT,
  FILTER_SUBREDDITS_BY_HOT_ENDPOINT,
  FILTER_SUBREDDITS_BY_RANDOM_ENDPOINT,
  GET_TOP_SUBREDDITS_ENDPOINT
}