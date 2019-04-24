import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

const ChoosePlan = ({ history }) => (
  <>
    <div className="my-3">
      {mockPlans.map(plan => (
        <div key={plan.id} className="form-check mb-2">
          <div className="d-flex">
            <div className="mr-2">
              <input
                id={plan.id}
                type="radio"
                className="form-check-input"
                name="plan"
                type="radio"
              />
            </div>
            <div>
              <label htmlFor={plan.id}>
                <div className="font-weight-bold">
                  {plan.title} - {plan.price}/month
                </div>
                <div className="text-muted">{plan.caption}</div>
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
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

const mockPlans = [
  { id: 'basic', price: '$0', title: 'Basic', caption: '1 project, 500 API calls per day' },
  {
    id: 'developer',
    price: '$30',
    title: 'Developer',
    caption: '3 projects, unlimited API calls'
  },
  { id: 'agency', price: '$60', title: 'Agency', caption: '10 projects, unlimited API calls' }
];

export default withRouter(ChoosePlan);

ChoosePlan.propTypes = {};
