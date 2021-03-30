import React, { Component } from "react";

function Image(props){
    const {urlImage, height, width} = props;
    return (
      <div>
          <form className="form-horizontal">
              <img
                  src={urlImage}
                  width={width}
                  height={height}
              />
          </form>
      </div>
    );
}

export default Image;
