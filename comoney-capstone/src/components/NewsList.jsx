import React from 'react';
import axios from 'axios';
import NewsItem from './Newsitem';
import { showFormattedDate } from '../utils/date-formatter';
import NewsItemLoading from './NewsItemLoading';

function NewsList() {
  const [newses, setNewses] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const getNewses = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://gnews.io/api/v4/search?q=money&token=ceed8ce1d8fd00e55ea5e3bf1280122e&lang=en');
        setNewses(response.data.articles);
        setLoading(false);
      } catch (e) {
        setLoading(true);
      }
    };
    getNewses();
  }, []);

  if (loading) {
    return <NewsItemLoading />;
  }

  return newses.map((news) => (
    <NewsItem
      key={news.url}
      title={news.title}
      description={news.description}
      image={news.image}
      publishedAt={showFormattedDate(news.publishedAt)}
      source={news.source.name}
      url={news.url}
    />
  ));
}

export default NewsList;
