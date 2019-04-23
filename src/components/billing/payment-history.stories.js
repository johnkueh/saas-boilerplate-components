import React from 'react';
import { storiesOf } from '@storybook/react';
import Layout from '../../components/layouts/settings';
import PaymentHistory from './payment-history';

const stories = storiesOf('Components|Billing/PaymentHistory', module);

stories.add('with invoices', () => (
  <Layout>
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
  </Layout>
));
