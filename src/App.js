import React from 'react';
import './App.css';
import ComplaintsForm from './views/ComplaintsForm';
import About from './views/About';
import AppBarWithDrawer from './components/appbar-with-drawer';
import { CssBaseline } from '@material-ui/core';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <CssBaseline />
      <AppBarWithDrawer />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <ComplaintsForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
