import axios from 'axios';
import { QUOTES_API } from '../global/api-config';

const getQuotes = async () => {
  const response = await axios.get(QUOTES_API.BASE_URL, {
    headers: {
      'X-Api-Key': QUOTES_API.KEY,
    },
  });

  return response.data[0];
};

export default getQuotes;
