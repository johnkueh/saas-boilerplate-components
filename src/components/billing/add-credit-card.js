import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Elements, StripeProvider, CardElement, injectStripe } from 'react-stripe-elements';

const AddCreditCard = ({ history }) => (
  <>
    <div className="mt-3 mb-2">
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}>
        <Elements>
          <div className="row">
            <div className="col-md-8">
              <div className="card p-3">
                <Form onAdded={onClose.bind(this, history)} />
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

const PaymentForm = ({ onAdded, stripe }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <CardElement style={{ base: { fontFamily: 'system-ui', fontSize: '15px' } }} hidePostalCode />
      <Button
        disabled={loading}
        size="sm"
        className="mt-3"
        onClick={async () => {
          setLoading(true);
          const { token } = await stripe.createToken({ name: 'customer name' });
          setLoading(false);
          if (token) onAdded();
        }}
      >
        {loading ? 'Loading...' : 'Submit'}
      </Button>
    </div>
  );
};

const onClose = history => {
  history.push('/billing');
};

const Form = injectStripe(PaymentForm);

PaymentForm.propTypes = {
  onAdded: PropTypes.func.isRequired
};

export default withRouter(AddCreditCard);
