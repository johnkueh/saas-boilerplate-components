import React from 'react';
import { storiesOf } from '@storybook/react';
import SettingsLayout from '../../components/layouts/settings';
import UpdateTeam from './index';

const stories = storiesOf('Components|Team/UpdateTeam', module);

stories.add('Default', () => (
  <SettingsLayout>
    <UpdateTeam />
  </SettingsLayout>
));
