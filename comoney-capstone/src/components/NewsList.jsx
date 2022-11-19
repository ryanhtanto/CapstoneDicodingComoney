import React from "react";
import NewsItem from "./Newsitem";
import NewsItemLoading from "./NewsItemLoading";
import { showFormattedDate } from "../utils/FormatDate";

const NewsList = ({ newses, loading }) => {
  return (
    <>
      {loading ? (
        <NewsItemLoading />
      ) : (
        <>
          {newses.map((news) => {
            return <NewsItem key={news.id} title={news.title} description={news.description} image={news.image} publishedAt={showFormattedDate(news.publishedAt)} url={news.url} />;
          })}
        </>
      )}
    </>
  );
};

export default NewsList;
