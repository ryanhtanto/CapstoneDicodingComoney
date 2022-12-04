/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { FcCalendar, FcLink } from 'react-icons/fc';

function NewsItemLoading({
  title, publishedAt, description, image, url, source,
}) {
  return (
    <div className="card my-4">
      <div className="cary-body p-0">
        <div className="row news-container">
          <div className="col-lg-4 col-md-5 col-sm-12">
            <span className="news-source px-2 py-1 my-4 rounded-end">
              <FcLink className="mx-1" />
              {source}
            </span>
            <img data-src={image} className="news-img rounded-start lazyload" alt={title} />
          </div>
          <div className="col-lg-8 col-md-7 col-sm-12 p-4">
            <h2 className="fw-bold medium__font">
              <p>
                {title}
              </p>
            </h2>
            <p>
              <small className="text-muted small__font">
                <FcCalendar className="me-1 mb-1" />
                {publishedAt}
              </small>
            </p>
            <p className="news-description">{description}</p>
            <a className="news-link text-decoration-none text-dark cursor-p rounded peding" target="_blank" rel="noopener" href={url}>
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItemLoading;
