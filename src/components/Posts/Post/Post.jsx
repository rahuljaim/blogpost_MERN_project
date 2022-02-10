import React, { Component } from "react";
import moment from "moment";
class Post extends Component {
  render() {
    const { post } = this.props;
    console.log("prop-new", this.props);
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={post.selectedFile}
          className="card-img-top"
          alt={post.title}
          title={post.title}
        />
        <div className="card-img-overlay">
          <div class="row align-items-start">
            <div class="col">
              <h5 className="card-title">{post.creator}</h5>
            </div>
            <div class="col text-end">
              <button type="button" class="btn btn-light" onClick={() => {}}>
                <i class="fas fa-ellipsis-h"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="card-body">
          <p className="card-text">
            <small className="text-muted">
              {post.tags.map((tag) => `#${tag} `)}
            </small>
          </p>
          <h4 className="card-title">{post.message}</h4>

          <div class="row align-items-start">
            <div class="col">
              <button
                type="button"
                class="btn btn-primary"
                title="like"
                onClick={() => {}}
              >
                <i class="fas fa-thumbs-up"></i> {post.likeCount}
              </button>
            </div>
            <div class="col text-end">
              <button
                type="button"
                class="btn btn-danger"
                title="delete"
                onClick={() => {}}
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>

          <p className="card-text text-end">
            <small className="text-muted">
              {moment(post.createdAt).fromNow()}
            </small>
          </p>
        </div>
      </div>
    );
  }
}

export default Post;
