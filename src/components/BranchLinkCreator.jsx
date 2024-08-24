import React from 'react';
import branch from 'branch-sdk';

export default function BranchLinkCreator() {
  const createBranchLink = () => {
    branch.link({
      tags: ['tag1', 'tag2'],
      channel: 'facebook',
      feature: 'share',
      stage: 'new user',
      data: {
        customData: 'Some custom data',
      }
    }, (err, link) => {
      if (err) {
        console.error('Branch link creation error:', err);
      } else {
        console.log('Branch link created:', link);
        alert(`Branch link created: ${link}`);
      }
    });
  };

  return (
    <div>
      <button onClick={createBranchLink}>Create Branch Link</button>
    </div>
  );
}

