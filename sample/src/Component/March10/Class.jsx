import React, { Component } from "react";


class ClassOne extends Component {
    constructor() {
        super();
        this.state = { city: "Bengaluru" };
    }

    handleClick=()=>{
        console.log('hello console');
    }


    render() {
        // console.log(this.props);
        const { name } = this.props;
        return (
            <div>
                <h1>Hello Class {name} from {this.state.city}</h1>
                <button onClick={this.handleClick}>Say hi</button>
            </div>

        );
    }
}

export default ClassOne;