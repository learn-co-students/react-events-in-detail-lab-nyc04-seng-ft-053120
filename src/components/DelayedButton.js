import React, { Component } from 'react';
// Code DelayedButton Component Here

class DelayedButton extends Component {

    handleClick = (evt) => {
        evt.persist();
        setTimeout(() => {
            this.props.onDelayedClick(evt);
        }, this.props.delay);
    }

    render() {
      return (
             <button onClick={this.handleClick}>Delay Button</button>
      )
    }
  }

  export default DelayedButton; 