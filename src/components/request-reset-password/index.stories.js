import React from 'react';
import { storiesOf } from '@storybook/react';
import Layout from '../../components/layouts/settings';
import RequestResetPassword from './index';

const stories = storiesOf('Components|User/RequestResetPassword', module);

stories.add('Default', () => (
  <Layout>
    <RequestResetPassword />
  </Layout>
));
