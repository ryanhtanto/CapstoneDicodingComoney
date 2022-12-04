const NEWS_API = {
  BASE_URL: 'https://gnews.io/api/v4/search',
  KEY: process.env.REACT_APP_NEWS_API_KEY,
};

const QUOTES_API = {
  BASE_URL: 'https://api.api-ninjas.com/v1/quotes',
  KEY: process.env.REACT_APP_QUOTES_API_KEY,
};

export { NEWS_API, QUOTES_API };
