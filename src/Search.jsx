import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { word: "" };
  }
  render() {
    const handleChange = (event) => {
      this.setState({
        word: event.target.value
      });
    };
    const { list, placeholder } = this.props;
    return (
      <div>
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
        <div>
          <ul>
            {list.filter((country) =>
              country.toLowerCase().includes(this.state.word.toLowerCase())
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
