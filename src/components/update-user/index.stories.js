import React from 'react';
import { storiesOf } from '@storybook/react';
import Layout from '../../components/layouts/settings';
import UpdateUser from './index';

const stories = storiesOf('Components|User/UpdateUser', module);

stories.add('Default', () => (
  <Layout>
    <UpdateUser />
  </Layout>
));
