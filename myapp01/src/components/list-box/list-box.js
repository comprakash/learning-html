import React, { Component } from "react";

class ListBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            fruits: [
                "Apples",
                "Bread",
                "Vada",
                "Oats",
                "Oranges",
                "Grapes",
                "Banana"
            ],
            searchString: ""
        };
    }

  render() {
    return (
        <ul>
        {this.state.fruits.filter(x => x.toLowerCase().includes(this.props.searchString.toLowerCase())).map(function (obj, idx) {
        return <li key={idx}>{obj}</li>})}
        </ul>
    )
  }
}

export default ListBox;
