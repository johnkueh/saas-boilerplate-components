import React from 'react';
import PropTypes from 'prop-types';

const SectionHeading = ({ children, className }) => <h5 className={className}>{children}</h5>;

export default SectionHeading;

SectionHeading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

SectionHeading.defaultProps = {
  className: ''
};
