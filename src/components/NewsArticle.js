import React from "react";
function NewsArticle(props) {
  let { url, title, imageUrl, description } = props;
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={!imageUrl?"https://contentstatic.techgig.com/photo/88607432/a-to-z-of-technology-top-tech-news-of-2021-at-a-glance.jpg?32786":imageUrl} className="card-img-top" alt="..." style={{ height: "150px" }} />
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p className="card-text">{description}...</p>
          <a href={url} className="btn btn-sm btn-primary" target="_blank" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsArticle;
