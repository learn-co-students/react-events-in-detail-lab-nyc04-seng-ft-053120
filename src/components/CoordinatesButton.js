// Code CoordinatesButton Component Here
import React from 'react';
class CoordinatesButton extends React.Component {
    
    handleClick = evt =>{
        console.log(this.props.onReceiveCoordinates)
        this.props.onReceiveCoordinates([evt.clientX, evt.clientY]);
    }
    render() {
        return (<button onClick={this.handleClick}>Coordinate </button>)
    }

}
export default CoordinatesButton;