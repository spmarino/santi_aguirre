import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Progress = () => {
  return (
    <Box sx={{ display: 'flex', marginTop: '20%', marginLeft: '50%' }}>
      <CircularProgress />
    </Box>
  );
}

export default Progress

