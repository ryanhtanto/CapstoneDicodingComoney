import React from "react";
import NewsItem from "./Newsitem";
import CONFIG from '../global/config'
import axios from "axios";
import { showFormattedDate } from "../utils/date-formatter";
import NewsItemLoading from "./NewsItemLoading";

const NewsList = () => {
  const [newses, setNewses] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const getNewses = async () => {
      setLoading(true)
      try {
        let response = await axios.get(CONFIG.NEWS_URL + CONFIG.API_KEY + CONFIG.MANY_NEWS);
        setNewses(response.data.articles)
        console.log(newses)
        setLoading(false)
      } catch (e) {
        setLoading(true)
      }
    }
    getNewses();
  }, [])

  if (loading) {
    return (
      <NewsItemLoading />
    )
  }

  return (
    newses.map((news) => {
      return <NewsItem
        key={news.url}
        title={news.title}
        description={news.description}
        image={news.urlToImage}
        publishedAt={showFormattedDate(news.publishedAt)}
        source={news.source.name}
        url={news.url} />
        ;
    })
  )

};

export default NewsList;
