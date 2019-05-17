import React, { Component } from 'react';
import InputBox from '../input-box/input-box';
import ListBox from '../list-box/list-box';

class  SearchBox extends Component{
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
        this.handleFilterUpdate = this.handleFilterUpdate.bind(this) ;
    }

    handleFilterUpdate(filterValue) {
        this.setState({searchString: filterValue});
    }
    render() {
        return (
            <div>
                <p onClick={this.handleClick}>
                    List View
                </p>
                <InputBox updateFilter={this.handleFilterUpdate}/> <br></br>
                <ListBox searchString={this.state.searchString} />
            </div>
        );
    }
}

export default SearchBox ;