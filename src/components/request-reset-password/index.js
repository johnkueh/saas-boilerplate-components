import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../layouts/auth';

const RequestResetPassword = props => (
  <AuthLayout>
    <form className="mt-3">
      <label className="mb-3">Enter your email address to request for a password reset</label>
      <input autoFocus className="form-control mb-3" type="email" placeholder="Email address" />
      <div className="mt-4">
        <button className="btn btn-block btn-primary" type="submit">
          Submit
        </button>
      </div>
      <div className="mt-3">
        Dont have an account? <Link to="/sign-up">Sign up</Link>
      </div>
    </form>
  </AuthLayout>
);

export default RequestResetPassword;
