import React, { useEffect } from 'react';
import branch from 'branch-sdk';
import BranchLinkCreator from './components/BranchLinkCreator';
import EventTracker from './components/EventTracker';
import JourneysBanner from './components/JourneysBanner';
import BranchLinkProcessor from './components/BranchLinkProcessor';

function App() {
  useEffect(() => {
    branch.init('key_live_dzcS1hZ4vG7tYolSzdPcEdepvCfyv3Sn', (err, data) => {
      if (err) {
        console.error('Branch SDK initialization error:', err);
      } else {
        console.log('Branch SDK initialized:', data);
      }
    });
  }, []);

  return (
    <div className="App">
      <h1>Branch SDK Integration</h1>
      <BranchLinkProcessor />
      <BranchLinkCreator />
      <EventTracker />
      <JourneysBanner />
    </div>
  );
}

export default App;
