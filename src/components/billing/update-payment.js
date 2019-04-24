import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

const UpdatePayment = ({ history }) => (
  <>
    <div className="my-3">Update payment</div>
    <div className="mt-4">
      <Button variant="link" onClick={onClose.bind(this, history)}>
        Cancel
      </Button>
      <Button onClick={onClose.bind(this, history)}>Confirm</Button>
    </div>
  </>
);

const onClose = history => {
  history.push('/billing');
};

export default withRouter(UpdatePayment);

UpdatePayment.propTypes = {};
