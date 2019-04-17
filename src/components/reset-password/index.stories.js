import React from 'react';
import { storiesOf } from '@storybook/react';
import SettingsLayout from '../../components/layouts/settings';
import ResetPassword from './index';

const stories = storiesOf('Components|User/ResetPassword', module);

stories.add('Default', () => (
  <SettingsLayout>
    <ResetPassword />
  </SettingsLayout>
));
