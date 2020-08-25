// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick = (event) => {
    let coords = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coords)
  }


  render() {    
    return (
      <button onClick={this.handleClick}>Coordinates Button</button>
    )
  }
}

export default CoordinatesButton