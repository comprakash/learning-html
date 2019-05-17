import React, { Component } from "react";

class InputBox extends Component {
    constructor(props) {
        super(props)
        this.handleFilterChange = this.handleFilterChange.bind(this) ;
    }
  handleFilterChange() {
    var value = this.refs.searchText.value;
    this.props.updateFilter(value);
    debugger;
  }

  render() {
    return <input onChange={this.handleFilterChange} type="text" ref="searchText" />;
  }
}

export default InputBox;
