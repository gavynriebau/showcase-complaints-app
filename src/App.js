import React from 'react';
import './App.css';
import ComplaintsForm from './components/complaints-form';
import { Container, CssBaseline } from '@material-ui/core';

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <ComplaintsForm />
      </Container>
    </>
  );
}

export default App;
