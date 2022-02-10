import React, { Component } from "react";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { Provider } from "react-redux";
import store from "./store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h1>Memories</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Posts />
            </div>
            <div className="col">
              <Form />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
