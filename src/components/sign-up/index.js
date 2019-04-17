import React from 'react';
import AuthLayout from '../layouts/auth';

const SignUp = props => (
  <AuthLayout>
    <form className="mt-3">
      <input autoFocus className="form-control mb-3" type="email" placeholder="Email address" />
      <input className="form-control mb-3" type="text" placeholder="First name" />
      <input className="form-control mb-3" type="text" placeholder="Last name" />
      <input className="form-control mb-3" type="password" placeholder="Password" />
      <div className="mt-4">
        <button className="btn btn-block btn-primary" type="submit">
          Sign up
        </button>
      </div>
      <div className="mt-3">
        Have an account? <a href="/log-in">Log in</a>
      </div>
    </form>
  </AuthLayout>
);

export default SignUp;
