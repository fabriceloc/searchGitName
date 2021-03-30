import React, { Component } from "react";

function Input(props){
    const {placeholder} = props;
    const [field, setField] = React.useState("")
    const handleChange = (event) => {
        let value = event.target.value;
        setField(value);
        props.setField(value);
    };
    return (
      <div>
          <form className="form-horizontal">
              <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder={placeholder}
                  onChange={handleChange}
              />
          </form>
      </div>
    );
}

export default Input;
