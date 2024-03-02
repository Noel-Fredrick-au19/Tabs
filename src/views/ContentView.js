import React, { useState } from 'react';
import { Card, CardContent, IconButton, Tooltip } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const ContentView = ({ content, urlContent }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(urlContent);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      <Card variant="outlined" style={{ marginTop: '10px', backgroundColor: '#f0f0f0' }}>
        <CardContent>
          <p>{content}</p>
        </CardContent>
      </Card>
      <Card variant="outlined" style={{ marginTop: '10px', backgroundColor: '#f0f0f0' }}>
        <CardContent style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ marginRight: '10px' }}>{urlContent}</p>
          <Tooltip title={copied ? "URL copied to clipboard!" : ''}>
            <IconButton onClick={handleCopyUrl} size="small">
              <FileCopyIcon />
            </IconButton>
          </Tooltip>
        </CardContent>
      </Card>
    </>
  );
};

export default ContentView;
