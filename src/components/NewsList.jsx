import React from 'react';
import NewsItem from './Newsitem';
import { showFormattedDate } from '../utils/date-formatter';
import NewsItemLoading from './NewsItemLoading';
import getNews from '../utils/news';

function NewsList() {
  const [newses, setNewses] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const getNewses = async () => {
      setLoading(true);
      try {
        const data = await getNews();
        setNewses(data.articles);
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
