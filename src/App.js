import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layout from './Components/layout';
import LoginPage from './Components/loginPage';
import Home from './Components/home';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
