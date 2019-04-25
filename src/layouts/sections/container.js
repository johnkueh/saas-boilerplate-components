import React from 'react';
import PropTypes from 'prop-types';

const SectionContainer = ({ children, className }) => <div className={className}>{children}</div>;

export default SectionContainer;

SectionContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

SectionContainer.defaultProps = {
  className: 'pt-4 pb-3'
};
