import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import Alert from '../alert';
import AuthLayout from '../layouts/auth';

const LogIn = ({ errors, onSubmit }) => (
  <AuthLayout>
    <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit}>
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className="mt-3">
          {errors && <Alert type="warning" messages={errors.map(error => error.message)} />}
          <input
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            autoFocus
            className="form-control mb-3"
            type="email"
            placeholder="Email address"
          />
          <input
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className="form-control mb-3"
            type="password"
            placeholder="Password"
          />
          <div className="mt-4">
            <button disabled={isSubmitting} className="btn btn-block btn-primary" type="submit">
              Log in
            </button>
          </div>
          <div className="mt-3">
            Dont have an account? <a href="/sign-up">Sign up</a>
          </div>
        </form>
      )}
    </Formik>
  </AuthLayout>
);

export default LogIn;

LogIn.propTypes = {
  errors: PropTypes.array,
  onSubmit: PropTypes.func.isRequired
};
