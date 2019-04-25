import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Layout from '../layouts/with-side-nav';
import Heading from '../layouts/sections/heading';
import Container from '../layouts/sections/container';
import HalfColumn from '../layouts/columns/half';
import PaymentHistory from '../components/billing/payment-history';
import ChoosePlan from '../components/billing/choose-plan';
import AddCreditCard from '../components/billing/add-credit-card';

const Account = () => (
  <Layout title="Billing">
    <HalfColumn>
      <Container>
        <Heading>Subscription plan</Heading>
        <Switch>
          <Route path="/billing/plans" component={UpdatePlan} />
          <Route component={Plan} />
        </Switch>
      </Container>
      <Container>
        <Heading>Payment method</Heading>
        <Switch>
          <Route path="/billing/payment" component={UpdatePayment} />
          <Route component={Payment} />
        </Switch>
      </Container>
      <Container>
        <Heading>Payment history</Heading>
        <PaymentHistory invoices={mockInvoices} />
      </Container>
    </HalfColumn>
  </Layout>
);

const Plan = props => (
  <>
    <div className="mb-2">Developer - $30/month</div>
    <Link className="d-block" to="/billing/plans">
      Choose plan
    </Link>
  </>
);

const UpdatePlan = ({ history }) => (
  <ChoosePlan
    plans={mockPlans}
    initialValue="basic"
    onSubmit={(values, { setSubmitting }) => {
      console.log('UpdatePlan', values);
      history.push('/billing');
    }}
    onCancel={() => {
      history.push('/billing');
    }}
  />
);

const Payment = props => (
  <>
    <div className="mb-2">XXXX-XXXX-XXXX-3234</div>
    <Link className="d-block" to="/billing/payment">
      Update
    </Link>
  </>
);

const UpdatePayment = props => <AddCreditCard />;

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

const mockPlans = [
  { id: 'basic', price: '$0', title: 'Basic', caption: '1 project, 500 API calls per day' },
  {
    id: 'developer',
    price: '$30',
    title: 'Developer',
    caption: '3 projects, unlimited API calls'
  },
  { id: 'agency', price: '$60', title: 'Agency', caption: '10 projects, unlimited API calls' }
];

export default Account;
