import React from 'react';
import { storiesOf } from '@storybook/react';
import Layout from '../../components/layouts/settings';
import UpdateTeam from './index';

const stories = storiesOf('Components|Team/UpdateTeam', module);

stories.add('Default', () => (
  <Layout>
    <UpdateTeam />
  </Layout>
));
