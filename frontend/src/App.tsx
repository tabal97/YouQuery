import React from 'react';
import './App.css';
import { VideoSummaryPage } from './Pages/VideoSummaryPage';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles';
import { Box } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box maxWidth="100%" maxHeight="100%" sx={{backgroundColor: 'primary.main', width: '100%', height: '100%'}}>
        <VideoSummaryPage/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
