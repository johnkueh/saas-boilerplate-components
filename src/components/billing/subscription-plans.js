import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import ChoosePlan from './choose-plan';

const SubscriptionPlans = props => (
  <div>
    <div className="mb-2">Developer - $30/month</div>
    <Switch>
      <Route path="/billing/plans" component={ChoosePlan} />
      <Route component={ChooseLink} />
    </Switch>
  </div>
);

const ChooseLink = props => (
  <div>
    <Link to="/billing/plans">Choose plan</Link>
  </div>
);

export default SubscriptionPlans;

SubscriptionPlans.propTypes = {};
