/**
 * sans oath
 */
const FILTER_SUBREDDITS_BY_NEW_ENDPOINT = 'https://www.reddit.com/r/all/new/.json'
const FILTER_SUBREDDITS_BY_BEST_ENDPOINT = 'https://www.reddit.com/r/all/best/.json'
const FILTER_SUBREDDITS_BY_HOT_ENDPOINT = 'https://www.reddit.com/r/all/hot/.json'

/**
 * avec oath
 */
const SEARCH_SUBREDDITS_ENDPOINT = 'https://www.oauth.reddit.com/api/search_subreddits'


module.exports = {
  SEARCH_SUBREDDITS_ENDPOINT,
  FILTER_SUBREDDITS_BY_NEW_ENDPOINT,
  FILTER_SUBREDDITS_BY_BEST_ENDPOINT,
  FILTER_SUBREDDITS_BY_HOT_ENDPOINT,
}