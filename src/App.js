import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
class App extends Component {
  state = {
    value: "# hello world \n## hello\n### hi"
  };
  render() {
    return (
      <div className="container">
        <div className=" header">
          <h1>Markdown by Jebrane</h1>
          <hr></hr>
        </div>

        <div className="row">
          <div className="col">
            <textarea
              className="textarea1"
              value={this.state.value}
              onChange={e => this.setState({ value: e.target.value })}
            ></textarea>
          </div>

          <div className="col marked">
            <ReactMarkdown source={this.state.value}></ReactMarkdown>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
