import React from "react";
import NewsList from "../components/NewsList";

const NewsListPage = ({ newses, loading }) => {
  return (
    <section>
      <div className="container mt-4">
        <h4 className="fw-bold mb-3">Daily Finance News</h4>
        <NewsList newses={newses} loading={loading}/>
      </div>
    </section>
  );
};

export default NewsListPage;