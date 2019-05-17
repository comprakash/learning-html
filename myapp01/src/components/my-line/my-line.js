import React, { Component } from "react";

class MyLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1.0
    };
    this.changeOpacity = this.changeOpacity.bind(this);
    this.changeOpacity();
  }

  changeOpacity() {
    setInterval(() => {
      if (this.state.opacity > 0) {
        this.setState({ opacity: this.state.opacity - 0.1 });
      } else {
        this.setState({ opacity: 1.0 });
      }
    }, 200);
  }

  render() {
    return (
      <p onChange={this.changeOpacity} style={this.state}>
        This line {this.props.name}
      </p>
    );
  }
}

export default MyLine;
