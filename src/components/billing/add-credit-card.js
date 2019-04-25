import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Elements, StripeProvider, CardElement, injectStripe } from 'react-stripe-elements';

const AddCreditCard = ({ onTokenized, onCancel }) => (
  <>
    <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}>
      <Elements>
        <div className="mt-3 mb-2">
          <div className="row">
            <div className="col-md-8">
              <div className="card p-3">
                <PaymentForm onTokenized={onTokenized} />
              </div>
            </div>
          </div>
        </div>
      </Elements>
    </StripeProvider>
    <Button className="pl-0 mr-2" variant="link" onClick={onCancel}>
      Cancel
    </Button>
  </>
);

const PaymentForm = injectStripe(({ onTokenized, stripe }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <CardElement style={{ base: { fontFamily: 'system-ui', fontSize: '15px' } }} hidePostalCode />
      <Button
        disabled={loading}
        size="sm"
        className="mt-3"
        onClick={async () => {
          setLoading(true);
          const { token } = await stripe.createToken({ name: 'customer name' });
          setLoading(false);
          if (token) onTokenized(token);
        }}
      >
        {loading ? 'Loading...' : 'Submit'}
      </Button>
    </>
  );
});

AddCreditCard.propTypes = {
  onTokenized: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

PaymentForm.propTypes = {
  onTokenized: PropTypes.func.isRequired
};

export default withRouter(AddCreditCard);
