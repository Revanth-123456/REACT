import React, { Component } from "react";

class ImageChange extends Component {

  constructor() {
    super();
    this.state = {
      image: "https://images.pexels.com/photos/36540591/pexels-photo-36540591.jpeg"
    };
  }

  handleClick = () => {
    this.setState({
      image: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg"
    });
  };

  render() {
    return (
      <div>
        <img src={this.state.image} alt="pic" width="300" />
        <br />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default ImageChange;