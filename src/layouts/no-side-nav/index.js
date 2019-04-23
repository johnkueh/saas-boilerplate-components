import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NoSideNav = ({ title, caption, children }) => (
  <div className="container p-5">
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="mb-5">
          <Link to="/">
            <img alt="logo" height="40" src="/full-logo-black.svg" />
          </Link>
        </div>
        <div className="mb-3">
          <h4 className="mt-3 mb-1">{title}</h4>
          {caption && <p className="mt-0 pt-0 text-muted">{caption}</p>}
        </div>
        {children}
      </div>
    </div>
  </div>
);

export default NoSideNav;

NoSideNav.propType = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string,
  children: PropTypes.node.isRequired
};
