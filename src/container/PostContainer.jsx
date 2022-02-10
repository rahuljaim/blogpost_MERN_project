import { connect } from "react-redux";
import Post from "../components/Posts/Post/Post";
import { getPost } from "../actions/postActions";

export const mapStateToProps = (state) => {
  return {
    post: state.posts,
  };
};
export const mapDispatchToProps = (dispatch) => ({
  getPost: (post) => dispatch(getPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
