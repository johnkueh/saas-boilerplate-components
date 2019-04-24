import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { CardElement, injectStripe } from 'react-stripe-elements';
import PropTypes from 'prop-types';

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

export default injectStripe(PaymentForm);

PaymentForm.propTypes = {
  onAdded: PropTypes.func.isRequired
};
