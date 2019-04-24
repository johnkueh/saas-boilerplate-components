import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

const ChoosePlan = ({ history }) => (
  <>
    <div className="my-3">
      {mockPlans.map(plan => (
        <Form.Check key={plan.id} className="mb-2" type="radio" id={plan.id}>
          <div className="d-flex">
            <div className="mr-2">
              <Form.Check.Input name="plan" type="radio" />
            </div>
            <div>
              <Form.Check.Label htmlFor={plan.id}>
                <div className="font-weight-bold">
                  {plan.title} - {plan.price}/month
                </div>
                <div className="text-muted">{plan.caption}</div>
              </Form.Check.Label>
            </div>
          </div>
        </Form.Check>
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
