import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";
class App extends Component {
  state = {
    value: "# hello world \n## hello\n### hi"
  };
  render() {
    return (
      <div>
        <center>
          <div className="text">
            <h1>Markdown by Jebrane</h1>
          </div>
          <div className="a">
            <a
              href="https://www.markdownguide.org/basic-syntax/"
              target="_blank"
            >
              Click for help
            </a>
          </div>
        </center>
        <textarea
          className="textarea1"
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
        ></textarea>
        <div className="marked">
          <ReactMarkdown source={this.state.value}></ReactMarkdown>
        </div>
      </div>
    );
  }
}

export default App;
