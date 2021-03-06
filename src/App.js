import React from "react";
import "./App.css";
import ComplaintsForm from "./views/complaints-form";
import About from "./views/about";
import AppBarWithDrawer from "./components/appbar-with-drawer";
import { CssBaseline } from "@material-ui/core";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
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
};

export default App;
