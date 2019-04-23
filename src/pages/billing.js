import React from 'react';
import PaymentHistory from '../components/billing/payment-history';
import Layout from '../layouts/with-side-nav';

const Account = () => (
  <Layout title="Billing">
    <div>[CREDIT_CARD_FORM_TO_COLLECT_PAYMENT]</div>
    <div className="py-3" />
    <h4 className="pb-3">Payment history</h4>
    <div className="row">
      <div className="col-md-6">
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
