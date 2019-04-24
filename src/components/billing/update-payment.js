import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Elements, StripeProvider } from 'react-stripe-elements';
import PaymentForm from './payment-form';

const UpdatePayment = ({ history }) => (
  <>
    <div className="mt-3 mb-2">
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}>
        <Elements>
          <div className="row">
            <div className="col-md-8">
              <div className="card p-3">
                <PaymentForm onAdded={onClose.bind(this, history)} />
              </div>
            </div>
          </div>
        </Elements>
      </StripeProvider>
    </div>
    <Button className="pl-0 mr-2" variant="link" onClick={onClose.bind(this, history)}>
      Cancel
    </Button>
  </>
);

const onClose = history => {
  history.push('/billing');
};

export default withRouter(UpdatePayment);
