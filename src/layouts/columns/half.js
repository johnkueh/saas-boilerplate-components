import React from 'react';
import PropTypes from 'prop-types';

const HalfColumn = ({ children }) => (
  <div className="row">
    <div className="col-md-6">{children}</div>
  </div>
);

export default HalfColumn;

HalfColumn.propTypes = {
  children: PropTypes.node.isRequired
};
