import React, { useEffect } from 'react';
import branch from 'branch-sdk';

function BranchLinkProcessor() {
  useEffect(() => {
    branch.init('key_live_dzcS1hZ4vG7tYolSzdPcEdepvCfyv3Sn', (err, data) => {
      if (err) {
        console.error('Branch Link processing error:', err);
      } else if (data && data.data_parsed) {
        console.log('Branch Link Data:', data.data_parsed);
        // Process the data received from the Branch link redirection
      }
    });
  }, []);

  return <div>Processing Branch Link...</div>;
}

export default BranchLinkProcessor;
