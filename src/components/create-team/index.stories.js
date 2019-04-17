import React from 'react';
import { storiesOf } from '@storybook/react';
import SettingsLayout from '../../components/layouts/settings';
import CreateTeam from './index';

const stories = storiesOf('Components|Team/CreateTeam', module);

stories.add('Default', () => (
  <SettingsLayout>
    <CreateTeam />
  </SettingsLayout>
));
