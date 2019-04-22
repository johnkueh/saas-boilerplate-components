import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogIn from './components/log-in';
import SignUp from './components/sign-up';
import RequestResetPassword from './components/request-reset-password';
import ResetPassword from './components/reset-password';
import Dashboard from './components/dashboard';

const App = () => (
  <Router>
    <Route path="/" exact component={LogIn} />
    <Route path="/login" exact component={LogIn} />
    <Route path="/sign-up" exact component={SignUp} />
    <Route path="/forgot-password" exact component={RequestResetPassword} />
    <Route path="/reset-password" exact component={ResetPassword} />
    <Route path="/dashboard" exact component={Dashboard} />
  </Router>
);

export default App;
