import React from "react";

const NewsItem = (props) => {
    let { title, description, imgUrl, newsUrl, author, newsTime,source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
            <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>        
          <img
            src={!imgUrl ? "https://ichef.bbci.co.uk/news/1024/branded_news/dc7e/live/8f7f6800-1e60-11ef-80aa-699d54c46324.jpg" : imgUrl}
            className="card-img-top"
            alt="..."
            style={{ height: "150px" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}        
            </h5>
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Go somewhere
            </a>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">
              By {author ? author : "Unknown"} on{" "}
              {new Date(newsTime).toGMTString()}
            </small>
          </div>
        </div>
      </div>
    );

}

export default NewsItem;
