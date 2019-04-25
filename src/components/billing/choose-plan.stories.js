import React from 'react';
import { storiesOf } from '@storybook/react';
import HalfColumn from '../../layouts/columns/half';
import Heading from '../../layouts/sections/heading';
import Container from '../../layouts/sections/container';
import ChoosePlan from './choose-plan';

const stories = storiesOf('Components|billing/choose-plan', module);

stories.add('default', () => (
  <div className="container">
    <HalfColumn>
      <Container>
        <Heading>Subscription plan</Heading>
        <ChoosePlan
          plans={[
            {
              id: 'plan_EwhdWAyl20lY3r',
              title: 'Agency',
              description: '10 projects, unlimited API calls',
              interval: 'month',
              amount: 6000,
              currency: 'usd'
            },
            {
              id: 'plan_EwhcP2qanL2la9',
              title: 'Freelancer',
              description: '3 projects, unlimited API calls',
              interval: 'month',
              amount: 3000,
              currency: 'usd'
            },
            {
              id: 'plan_EwhcFkDkq3Wfzr',
              title: 'Free',
              description: '1 project, 500 API calls per day',
              interval: 'month',
              amount: 0,
              currency: 'usd'
            }
          ]}
          initialValue="plan_EwhcP2qanL2la9"
          onSubmit={(values, { setSubmitting }) => {
            console.log('UpdatePlan', values);
          }}
          onCancel={() => {}}
        />
      </Container>
    </HalfColumn>
  </div>
));
