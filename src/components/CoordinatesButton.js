// Code CoordinatesButton Component Here
import React from 'react';


class CoordinatesButton extends React.Component {
    
handleButton = (evt) => {
    let cords = [evt.clientX, evt.clientY]
    console.log(cords)
  this.props.onReceiveCoordinates(cords)
}
    render() {
        return (
            <button onClick={this.handleButton}>click</button>
        )
    }
}

export default CoordinatesButton