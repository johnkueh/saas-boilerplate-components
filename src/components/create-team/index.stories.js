import React from 'react';
import { storiesOf } from '@storybook/react';
import Layout from '../../components/layouts/settings';
import CreateTeam from './index';

const stories = storiesOf('Components|Team/CreateTeam', module);

stories.add('Default', () => (
  <Layout>
    <CreateTeam />
  </Layout>
));
