import React from 'react';

function NewsItemLoading() {
  const news = [];
  for (let i = 0; i < 5; i++) {
    news.push(
      <div className="card my-4" key={i}>
        <div className="cary-body p-0">
          <div className="row news-container">
            <div className="col-lg-4 col-md-5 col-sm-12">
              <div className="news-img placeholder rounded-start" alt="news-thumbnail" />
            </div>
            <div className="col-lg-8 col-md-7 col-sm-12 p-4">
              <h2 className="placeholder-glow">
                <span className="placeholder col-9 placeholder-lg rounded" />
              </h2>
              <p className="text-muted placeholder-glow">
                <span className="placeholder col-6 placeholder-lg rounded" />
              </p>
              <h2 className="text-muted placeholder-glow">
                <span className="placeholder col-6 placeholder-lg rounded" />
              </h2>
            </div>
          </div>
        </div>
      </div>,
    );
  }
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { news }
    </>
  );
}

export default NewsItemLoading;
