import React from 'react';

const TabContent = ({ url }) => {
  return (
    <iframe className="w-full h-full" title="Tab Content" src={url} />
  );
};

export default TabContent;
