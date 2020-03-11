import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Entry from './components/Entry'
import Auth from './components/Auth'
import Login from './components/Login'
import Layout from './components/Layout'
import 'semantic-ui-css/semantic.min.css'
import './styles/base.css'

function App() {
  return (
    <Router>
      <Route exact path={["/", "/register"]} component={Entry}/>
      <Route path="/register" component={Auth}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/home" component={Layout}/>
    </Router>

  );
}

export default App;
