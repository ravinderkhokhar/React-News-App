import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, newsTime,source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'85%'}}> {source} </span>
          <img
            src={imgUrl}
            className="card-img-top"
            alt="..."
            style={{ height: "150px" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}
              
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
}

export default NewsItem;
