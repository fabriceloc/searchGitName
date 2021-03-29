import React, { Component } from "react";

class Title extends Component {
  render() {
    const { field, color, height } = this.props;
    return (
      <div>
        <h1 style={{ backgroundColor: color, height: height }}>{field}</h1>
      </div>
    );
  }
}
export default Title;
