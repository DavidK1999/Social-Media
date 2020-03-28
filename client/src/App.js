import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Entry from './components/Entry'
import Auth from './components/Auth'
import Login from './components/Login'
import Layout from './components/Layout'
import 'semantic-ui-css/semantic.min.css'
import './styles/base.css'
import { useSelector } from 'react-redux';

function App() {
  const loggedIn = useSelector(state => state.auth.loggedIn)

  return (
    <Router>
        
        <Route exact path={["/", "/register", "/logout"]} component={Entry}/>
        <Route exact path="/register" component={Auth}/>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path={["/home", "/explore", "/:username", "/:username/likes", "/tagged/:tag"]} component={Layout}/>
        </Switch>
        
        {loggedIn ? <Redirect to="/home"/> : <Redirect to="/"/>}
    </Router>

  );
}

export default App;
