// Code DelayedButton Component Here
import React from 'react';
class DelayedButton extends React.Component {
    handleClick=evt=>{
        evt.persist()
        window.setTimeout(()=>{
            this.props.onDelayedClick(evt)},this.props.delay)
        
    }

    render() {
        return (
<button onClick={this.handleClick}>Delay</button>
        )
    }

}
export default DelayedButton;