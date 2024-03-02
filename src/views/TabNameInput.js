// TabNameInput.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const TabNameInput = ({ onSubmit }) => {
  const [tabName, setTabName] = useState('');

  const handleSubmit = () => {
    if (tabName.trim()) {
      onSubmit(tabName.trim());
      setTabName('');
    }
  };

  return (
    <div>
      <TextField
        label="Tab Name"
        value={tabName}
        onChange={(e) => setTabName(e.target.value)}
        variant="outlined"
        margin="dense"
      />
      <Button variant="contained" onClick={handleSubmit}>Save</Button>
    </div>
  );
};

export default TabNameInput;
