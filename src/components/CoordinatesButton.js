// Code CoordinatesButton Component Here

import React, { Component } from "react";


export default class CordinatesButton extends Component{
    
    clickHandler = (e) => {
        e.persist()
        
        return this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }
    

    render(){
        return(
           <button onClick={this.clickHandler}>
               Coordinates BTN
               
           </button>
        )
    }
}