import React, { Component } from "react";

function Button(props) {
    const { title, backgroudColor, height = "25px" } = props;
    return (
      <div>
        <button style={{ backgroundColor: backgroudColor, height: height }}>
          {title}
        </button>
      </div>
    );
}
export default Button;
