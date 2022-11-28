import React from "react";
import LocaleContext from "../context/LocaleContext";
import NewsList from "../components/NewsList";

function News() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <section>
      <div className="container mt-4">
        <h2 className="fw-bold mb-3 fs-4">{locale === "en" ? "Daily Finance News" : "Berita Keuangan Harian"}</h2>
        <p></p>
        <NewsList />
      </div>
    </section>
  );
}

export default News;
