import React from 'react';
import logo from './logo.svg';
import './App.css';
import { VideoSummaryPage } from './Pages/VideoSummaryPage';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles';
import { Container } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{backgroundColor: 'primary.main'}}>

<VideoSummaryPage/>
      </Container>

    </ThemeProvider>
  );
}

export default App;
