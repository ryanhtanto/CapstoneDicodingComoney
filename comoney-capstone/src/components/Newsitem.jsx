import React from "react";

const NewsItemLoading = ({ title, publishedAt, description, image, url }) => {
  return (
    <div className="card my-4">
      <div className="cary-body p-0">
        <div className="row">
          <div className="col-lg-4 col-md-5 col-sm-12">
            <img src={image} className="news-img" alt="news-thumbnail" />
          </div>
          <div className="col-lg-8 col-md-7 col-sm-12 p-4">
            <h2 className="fw-bold medium__font">
              <a className="text-decoration-none text-dark cursor-p" target="blank" rel="noopener" href={url}>
                {title}
              </a>
            </h2>
            <p>
              <small class="text-muted small__font">{publishedAt}</small>
            </p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItemLoading;
