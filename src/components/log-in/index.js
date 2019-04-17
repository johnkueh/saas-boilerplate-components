import React from 'react';
import AuthLayout from '../layouts/auth';

const LogIn = props => (
  <AuthLayout>
    <form className="mt-3">
      <input autoFocus className="form-control mb-3" type="email" placeholder="Email address" />
      <input className="form-control mb-3" type="password" placeholder="Password" />
      <div className="mt-4">
        <button className="btn btn-block btn-primary" type="submit">
          Log in
        </button>
      </div>
      <div className="mt-3">
        Dont have an account? <a href="/sign-up">Sign up</a>
      </div>
    </form>
  </AuthLayout>
);

export default LogIn;
