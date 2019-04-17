import React from 'react';
import { storiesOf } from '@storybook/react';
import SettingsLayout from '../../components/layouts/settings';
import RequestResetPassword from './index';

const stories = storiesOf('Components|User/RequestResetPassword', module);

stories.add('Default', () => (
  <SettingsLayout>
    <RequestResetPassword />
  </SettingsLayout>
));
