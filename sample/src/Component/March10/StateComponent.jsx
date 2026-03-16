import React, { Component } from "react";

class StateComponent extends Component {

    constructor() {
        super();
        this.state={name:"David"};
        // this.handleClick=this.handleClick.bind(this)


    }
    handleClick = () => {
        // console.log(this);
        this.setState({ name: "Johnson" });
        // this.state={name:"johnson"};-.wrong we need to use set state method
    };




    render() {
        return (
            <div>
                <h1>Name:{this.state.name}</h1>
                <button onClick={this.handleClick.bind(this)}>Submit</button>
            </div>
        )
    }
}

export default StateComponent;