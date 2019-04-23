import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogIn from './components/log-in';
import SignUp from './components/sign-up';
import RequestResetPassword from './components/request-reset-password';
import ResetPassword from './components/reset-password';
import Projects from './pages/projects';
import NewProject from './pages/new-project';
import Account from './pages/account';
import Settings from './pages/settings';
import Team from './pages/team';
import Billing from './pages/billing';
import Dashboard from './pages/dashboard';

const App = () => (
  <Router>
    <Route path="/" exact component={LogIn} />
    <Route path="/login" exact component={LogIn} />
    <Route path="/sign-up" exact component={SignUp} />
    <Route path="/forgot-password" exact component={RequestResetPassword} />
    <Route path="/reset-password" exact component={ResetPassword} />
    <Route path="/logout" exact component={LogIn} />

    <Route path="/projects" exact component={Projects} />
    <Route path="/projects/new" exact component={NewProject} />
    <Route path="/account" exact component={Account} />
    <Route path="/settings" exact component={Settings} />
    <Route path="/billing" exact component={Billing} />
    <Route path="/team" exact component={Team} />
    <Route path="/dashboard" exact component={Dashboard} />
  </Router>
);

export default App;
