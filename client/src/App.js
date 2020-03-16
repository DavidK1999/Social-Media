import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
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
      <Route exact path={["/", "/register"]} component={Entry}/>
      <Route path="/register" component={Auth}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path={["/home", "/explore", "/:username/likes"]} component={Layout}/>
      <Route exact path="/:username" component={Layout}/>
      {loggedIn ? <Redirect to="/home"/> : null}
    </Router>

  );
}

export default App;
