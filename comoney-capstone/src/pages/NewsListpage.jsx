import React from "react";
import NewsList from "../components/NewsList";
import LocaleContext from "../context/LocaleContext";

const NewsListPage = ({ newses, loading }) => {
  const { locale } = React.useContext(LocaleContext);

  return (
    <section>
      <div className="container mt-4">
        <h4 className="fw-bold mb-3">{locale === "en" ? "Global Daily Finance News" : "Berita Keuangan Harain Global"}</h4>
        <NewsList newses={newses} loading={loading}/>
      </div>
    </section>
  );
};

export default NewsListPage;