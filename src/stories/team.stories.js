import React from 'react';
import { storiesOf } from '@storybook/react';
import SettingsLayout from '../components/layouts/settings';
import CreateTeam from '../components/create-team';
import UpdateTeam from '../components/update-team';

const stories = storiesOf('Team', module);

stories.add('Create team', () => (
  <SettingsLayout>
    <CreateTeam />
  </SettingsLayout>
));
stories.add('Update team', () => (
  <SettingsLayout>
    <UpdateTeam />
  </SettingsLayout>
));
