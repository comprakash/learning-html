import React, {Component} from "react";
import GenericComponent2 from "../generic-component/generic-component";

class UserName extends Component {
  render() {
    return <div>name: {this.props.name}</div>;
  }
}

class User extends Component {
  render() {
    return (
      <div>
        <h3>City: {this.props.user.city}</h3>
        <UserName name={this.props.user.name} />
        <GenericComponent2 />
        <GenericComponent2 things="cadbury"/>
      </div>
    );
  }
}

export default User;
