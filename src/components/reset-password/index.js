import React from 'react';
import AuthLayout from '../layouts/auth';

const ResetPassword = props => (
  <AuthLayout>
    <form className="mt-3">
      <label className="mb-3">Set a new password for your account</label>
      <input autoFocus className="form-control mb-3" type="password" placeholder="New password" />
      <input className="form-control mb-3" type="password" placeholder="Re-enter new password" />
      <div className="mt-4">
        <button className="btn btn-block btn-primary" type="submit">
          Reset password
        </button>
      </div>
    </form>
  </AuthLayout>
);

export default ResetPassword;
