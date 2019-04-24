import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PaymentHistory from '../components/billing/payment-history';
import ChoosePlan from '../components/billing/choose-plan';
import UpdatePayment from '../components/billing/update-payment';
import Layout from '../layouts/with-side-nav';

const Account = () => (
  <Layout title="Billing">
    <div className="row">
      <div className="col-md-6">
        <h5 className="pt-2 pb-2">Subscription plan</h5>
        <div className="mb-2">Developer - $30/month</div>
        <Switch>
          <Route path="/billing/plans" component={ChoosePlan} />
          <Route component={ChoosePlanLink} />
        </Switch>
        <h5 className="pt-4 pb-2">Payment method</h5>
        <Switch>
          <Route path="/billing/payment" component={UpdatePayment} />
          <Route component={PaymentMethod} />
        </Switch>
        <h5 className="pt-4 pb-2">Payment history</h5>
        <PaymentHistory invoices={mockInvoices} />
      </div>
    </div>
  </Layout>
);

const ChoosePlanLink = () => (
  <Link className="d-block" to="/billing/plans">
    Choose plan
  </Link>
);

const PaymentMethod = () => (
  <>
    <div className="mb-2">XXXX-XXXX-XXXX-3234</div>
    <Link className="d-block" to="/billing/payment">
      Update
    </Link>
  </>
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
