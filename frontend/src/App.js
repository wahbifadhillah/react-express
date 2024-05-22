import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import AllPosts from './components/AllPosts';
import AddNewPost from './components/AddNewPost';
import Preview from './components/Preview';
import EditPost from './components/EditPost';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllPosts />} />
          <Route path="/add" element={<AddNewPost />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
