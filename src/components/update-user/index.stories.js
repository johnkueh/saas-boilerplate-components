import React from 'react';
import { storiesOf } from '@storybook/react';
import SettingsLayout from '../../components/layouts/settings';
import UpdateUser from './index';

const stories = storiesOf('Components|User/UpdateUser', module);

stories.add('Default', () => (
  <SettingsLayout>
    <UpdateUser />
  </SettingsLayout>
));
