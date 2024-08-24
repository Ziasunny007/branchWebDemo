import React from 'react';
import branch from 'branch-sdk';

function EventTracker() {
  const trackEvent = () => {
    branch.track('Button Clicked', {
      customData: 'Some custom data'
    });
    alert('Event Tracked');
  };



  return (
    <div>
      <button onClick={trackEvent}>Track Event</button>
    </div>
  );
}

export default EventTracker;
