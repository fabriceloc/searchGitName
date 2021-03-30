import React  from "react";

function Image(props){
    const {urlImage, height, width} = props;
    return (
      <div>
          <div className="form-horizontal">
              <img
                  src={urlImage}
                  width={width}
                  height={height}
              />
          </div>
      </div>
    );
}

export default Image;
