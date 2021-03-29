import React, { Component } from "react";

class Button extends Component {
  render() {
    const { title, backgroudColor, height = "25px" } = this.props;
    return (
      <div>
        <button style={{ backgroundColor: backgroudColor, height: height }}>
          {title}
        </button>
      </div>
    );
  }
}
export default Button;
