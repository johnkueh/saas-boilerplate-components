import React from 'react';
import { storiesOf } from '@storybook/react';
import Layout from '../../components/layouts/settings';
import ResetPassword from './index';

const stories = storiesOf('Components|User/ResetPassword', module);

stories.add('Default', () => (
  <Layout>
    <ResetPassword />
  </Layout>
));
