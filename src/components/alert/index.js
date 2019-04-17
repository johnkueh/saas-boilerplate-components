import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ type, messages }) => (
  <div className={`alert alert-${type}`}>
    {messages.map((message, index) => (
      <p key={index} className="m-0">
        {message}
      </p>
    ))}
  </div>
);

export default Alert;

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired
};
