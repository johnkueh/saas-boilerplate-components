import React from 'react';
import { storiesOf } from '@storybook/react';
import HalfColumn from '../../layouts/columns/half';
import Heading from '../../layouts/sections/heading';
import Container from '../../layouts/sections/container';
import PaymentHistory from './payment-history';

const stories = storiesOf('Components|billing/payment-history', module);

stories.add('default', () => (
  <div className="container">
    <HalfColumn>
      <Container>
        <Heading>Payment history</Heading>
        <PaymentHistory
          invoices={[
            {
              amountDue: 50,
              amountPaid: 50,
              invoicePdf: 'https://stripe.com/invoice.pdf',
              status: 'Paid',
              date: '01-05-2019',
              periodStart: '01-05-2019',
              periodEnd: '01-06-2019'
            },
            {
              amountDue: 50,
              amountPaid: 50,
              invoicePdf: 'https://stripe.com/invoice.pdf',
              status: 'Paid',
              date: '01-06-2019',
              periodStart: '01-06-2019',
              periodEnd: '01-07-2019'
            },
            {
              amountDue: 50,
              amountPaid: 50,
              invoicePdf: 'https://stripe.com/invoice.pdf',
              status: 'Paid',
              date: '01-07-2019',
              periodStart: '01-07-2019',
              periodEnd: '01-08-2019'
            }
          ]}
        />
      </Container>
    </HalfColumn>
  </div>
));
