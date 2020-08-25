import React from 'react';

const CoordinatesButton = (props) => {

  const {onReceiveCoordinates} = props;

  const handleClick = e => onReceiveCoordinates([e.clientX, e.clientY]);

    // Within CoordinatesButton, render a button. On click of the button, create an array with two elements: the X and Y coordinates of the mouse. Find these using the event data.
  return <button onClick={handleClick}>Coordinates</button>
}


export default CoordinatesButton;