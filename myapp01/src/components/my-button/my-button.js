import React, { Component } from 'react';

class  MyButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            liked: false,
            name: ""
        };
        this.handleClick = this.handleClick.bind(this) ;
        this.handleChange = this.handleChange.bind(this) ;
    }

    handleClick(event) {
        this.setState({liked: !this.state.liked});
    }
    handleChange(event) {
        this.setState({name: this.refs.myTextInput.value});
    }
    render() {
        let  text = this.state.liked ? 'liked' : 'haven\'t liked';
        return (
            <div>
                <p onClick={this.handleClick}>
                    You {text} this. Click to toggle.
                </p>
                Please enter your Name - <input onChange={this.handleChange} type="text" ref="myTextInput" /> <br/><br/>
                <p> Hello {this.state.name}, Welcome to React!</p>
            </div>
        );
    }
}

export default MyButton ;