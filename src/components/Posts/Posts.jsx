import React, { Component } from "react";
import Post from "./Post/Post";
import { connect } from "react-redux";
import { getPost } from "./../../actions/postActions";

class Posts extends Component {
  componentDidMount() {
    this.props.getPost();
  }
  render() {
    const { posts } = this.props;
    console.log("postssss", posts);
    return !posts.length ? (
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "75%" }}
        ></div>
      </div>
    ) : (
      <div className="container">
        <div className="row row-cols-2">
          {posts.map((post) => (
            <div className="col" key={post._id}>
              <Post post={post} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.items,
});

export default connect(mapStateToProps, { getPost })(Posts);
