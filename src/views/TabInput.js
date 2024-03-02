
import { useState } from 'react';
import { Card, CardContent, TextField, Button } from '@mui/material';

const TabInput = ({ onSubmit }) => {
  const [content, setContent] = useState('');
  const [urlContent, setUrlContent] = useState('');

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrlContent(event.target.value); 
  };

  const handleSubmit = () => {
    onSubmit(content, urlContent);
    setContent('');
    setUrlContent('');
  };

  return (
    <>
      <Card variant="outlined" style={{ marginTop: '10px', backgroundColor: '#f0f0f0' }}>
        <CardContent>
          <TextField
            value={content}
            onChange={handleContentChange}
            label="Enter content"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            style={{ marginBottom: '10px' }}
          />

        </CardContent>
      </Card>

      <Card variant="outlined" style={{ marginTop: '10px', marginBottom: '25px', backgroundColor: '#f0f0f0' }}>
        <CardContent>
          {/* <URLContent /> */}
          <TextField
            value={urlContent}
            onChange={handleUrlChange}
            label="Enter URL"
            fullWidth
            variant="outlined"
            style={{ marginBottom: '10px' }}
          />
        </CardContent>
      </Card>

      <Button variant="contained" color="primary" onClick={handleSubmit}>Save</Button>
    </>
  );
};

export default TabInput;

