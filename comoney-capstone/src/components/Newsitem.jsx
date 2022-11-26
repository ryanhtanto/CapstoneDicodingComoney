import React from "react";
import { FcCalendar, FcLink } from "react-icons/fc"

const NewsItemLoading = ({ title, publishedAt, description, image, url, source }) => {
  return (
    <>
      <div className="card my-4">
        <div className="cary-body p-0">
          <div className="row news-container">
            <div className="col-lg-4 col-md-5 col-sm-12">
              <span className="news-source px-2 py-1 my-4 rounded-end"><FcLink className="mx-1" />{source}</span>
              <img src={image} className="news-img rounded-start" alt="news-thumbnail" />
            </div>
            <div className="col-lg-8 col-md-7 col-sm-12 p-4">
              <h2 className="fw-bold medium__font">
                <p className="text-decoration-none text-dark cursor-p" target="blank" rel="noopener" href={url}>
                  {title}
                </p>
              </h2>
              <p>
                <small className="text-muted small__font"><FcCalendar className="me-1 mb-1" />{publishedAt}</small>
              </p>
              <p className="news-description">{description}</p>
              <a className="news-link text-decoration-none text-dark cursor-p rounded py-1 px-2" target="blank" rel="noopener" href={url}>Read More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItemLoading;