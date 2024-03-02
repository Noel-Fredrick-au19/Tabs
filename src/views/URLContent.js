import React, { useState } from 'react';
import { TextField, IconButton, Tooltip } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const URLContent = ({ onSubmit }) => {
  const [url, setURL] = useState('');
  const [copied, setCopied] = useState(false);


  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); 
  };

  return (
    <div>
      <TextField
        label="URL"
        value={url}
        onChange={(e) => setURL(e.target.value)}
        variant="outlined"
        margin="dense"
      />
      <Tooltip title="Copy URL">
        <IconButton onClick={handleCopy}>
          <FileCopyIcon />
        </IconButton>
      </Tooltip>
      {copied && <span style={{ color: 'green' }}>URL copied to clipboard!</span>}
    </div>
  );
};

export default URLContent;
