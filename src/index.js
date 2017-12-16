import React from "react";
import ReactDOM from "react-dom";
import BarGraph from "./bargraph";

class App extends React.Component {
  render() {
    return (
        <div>
            <p>Hello {this.props.name}</p>
            <BarGraph />
        </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Background" />, mountNode);