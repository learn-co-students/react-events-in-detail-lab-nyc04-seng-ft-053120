import React from 'react';
import { verifyAndRestore } from 'sinon';

const onDelayedClick = (props) => {
  const {onDelayedClick, delay} = props;

  // If you want to access the event properties in an asynchronous way, you should call event.persist() on the event, which will remove the synthetic event from the pool and allow references to the event to be retained by user code.

  const handleClick = e => {
    e.persist();
    window.setTimeout(() => {
      onDelayedClick(e)
    }, delay)
  }

  // Create a button that, when clicked, will pass the click event to the onDelayedClick prop within a setTimeout(). The setTimeout() should be set to this.props.delay.
  return <button onClick={handleClick}>Click Me</button>
}

export default onDelayedClick;