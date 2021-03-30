import React, { Component } from "react";

function Stars(props) {
  const {number} = props;
  function createStarts(n) {
    let elements = "";
    for(let i =0; i < n; i++){
      elements += "*";
    }
    return elements || "pas d'etoile";
  }

  return (
    <div>
      <p>
        { createStarts(number) }
      </p>
    </div>
  );
}
export default Stars;
