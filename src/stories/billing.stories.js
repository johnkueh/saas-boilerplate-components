import React from 'react';
import { storiesOf } from '@storybook/react';
import SettingsLayout from '../components/layouts/settings';
import PaymentHistory from '../components/billing/payment-history';

const stories = storiesOf('Billing', module);

stories.add('Payment history', () => (
  <SettingsLayout>
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
  </SettingsLayout>
));
