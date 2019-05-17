import React, { Component } from "react";

class RepoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items: []
    };
    this.props.prm.then(res =>  {
        this.setState({items: res.items})
      });
  }

  render() {
    return <div><table><tbody>{this.state.items.map(function (obj, idx) {
        return <tr key={idx}><td> {obj.full_name} : {obj.owner.url}</td></tr>
    })}
    </tbody></table></div>;
  }
}

export default RepoList;

/* <MyProps name="the best" /> */
