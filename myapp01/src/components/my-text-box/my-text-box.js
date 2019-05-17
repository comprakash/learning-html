import React , {Component} from 'react';

class  MyTextBox extends Component{
    constructor(){
        super();
        this.state = {liked: false};
        this.handleClick = this.handleClick.bind(this) ;
    }

    handleClick() {this.refs.myDateInput.focus(); }
    render() {
        return (
            <div>
                <input type="date" ref="myDateInput" /> <br/><br/>
                <input type="button" value="Bring back focus"
                             onClick={this.handleClick} />
            </div>
        );
    }
}

export default MyTextBox ;