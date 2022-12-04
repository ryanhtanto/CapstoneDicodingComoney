import axios from 'axios';
import { NEWS_API } from '../global/api-config';

const getNews = async () => {
  const response = await axios.get(NEWS_API.BASE_URL, {
    params: {
      token: NEWS_API.KEY,
      lang: 'en',
      q: 'money',
    },
  });

  return response.data;
};

export default getNews;
