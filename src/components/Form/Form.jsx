import React, { Component } from "react";
import FileBase from "react-file-base64";
import { connect } from "react-redux";
import { createPost } from "./../../actions/postActions";

class Form extends Component {
  constructor(props) {
    super(props);
    // Don't do this!
    this.state = {
      postData: {
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearBtn = this.clearBtn.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const postData = {
      creator: this.state.postData.creator,
      title: this.state.postData.title,
      message: this.state.postData.message,
      tags: this.state.postData.tags,
      selectedFile: this.state.postData.selectedFile,
    };

    this.props.createPost(postData);
  }
  handleChange(e) {
    this.setState({
      postData: { ...this.state.postData, [e.target.name]: e.target.value },
    });
    console.log("target name", this.state.postData);
  }
  fileUpload({ base64 }) {
    this.setState({
      postData: { ...this.state.postData, selectedFile: base64 },
    });
    console.log("target name", this.state.postData);
  }
  clearBtn() {
    this.setState({
      postData: {
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
      },
    });
  }
  render() {
    return (
      <div>
        <h1>Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Creator
            </label>
            <input
              type="text"
              name="creator"
              className="form-control form-control-lg"
              aria-describedby="Creator"
              value={this.state.postData.creator}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Titles
            </label>
            <input
              type="text"
              name="title"
              className="form-control form-control-lg"
              aria-describedby="Title"
              value={this.state.postData.title}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Message
            </label>
            <textarea
              name="message"
              className="form-control form-control-lg"
              aria-describedby="Message"
              value={this.state.postData.message}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Tags
            </label>
            <input
              type="text"
              name="tags"
              className="form-control form-control-lg"
              aria-describedby="Tags"
              value={this.state.postData.tags.split(",")}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <FileBase type="file" multiple={false} onDone={this.fileUpload} />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="submit"
            className="btn btn-secondary ms-3"
            onClick={this.clearBtn}
          >
            Clear
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createPost })(Form);
