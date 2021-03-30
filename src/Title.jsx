import React, { Component } from "react";

function Title (props) {
  const { field, color, height } = props;
  return (
    <div>
      <h1 style={{ backgroundColor: color, height: height }}>{field}</h1>
    </div>
  );
}
export default Title;
