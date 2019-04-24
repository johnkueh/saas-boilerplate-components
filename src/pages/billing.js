import React from 'react';
import PaymentHistory from '../components/billing/payment-history';
import PaymentMethod from '../components/billing/payment-method';
import SubscriptionPlans from '../components/billing/subscription-plans';
import Layout from '../layouts/with-side-nav';

const Account = () => (
  <Layout title="Billing">
    <div className="row">
      <div className="col-md-6">
        <h5 className="pt-2 pb-2">Subscription plan</h5>
        <SubscriptionPlans />
        <h5 className="pt-4 pb-2">Payment method</h5>
        <PaymentMethod />
        <h5 className="pt-4 pb-2">Payment history</h5>
        <PaymentHistory invoices={mockInvoices} />
      </div>
    </div>
  </Layout>
);

const mockInvoices = [
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
];

export default Account;
