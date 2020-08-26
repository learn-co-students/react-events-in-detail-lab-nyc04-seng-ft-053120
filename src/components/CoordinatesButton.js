import React, { Component } from 'react';
// Code CoordinatesButton Component Here

class CoordinatesButton extends Component {

    createArray = (evt) => {
        this.props.onReceiveCoordinates([evt.clientX, evt.clientY])
      }

    render() {
      return (
            <button onClick={this.createArray} >Coordinates Button</button>
      )
    }
  }

  export default CoordinatesButton; 