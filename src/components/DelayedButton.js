// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

    handleDelay = event => {
        event.persist(); //makes event persistant / removes it from being pooled
        // const target = event
        // console.log(target)
        window.setTimeout(() => {
          this.props.onDelayedClick(event);
        }, this.props.delay);
      };

    render() {
        return (
            <button onClick={this.handleDelay}>Delayed</button>
        )
    }
}

export default DelayedButton