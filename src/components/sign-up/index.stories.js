import React from 'react';
import { storiesOf } from '@storybook/react';
import SettingsLayout from '../../components/layouts/settings';
import SignUp from './index';

const stories = storiesOf('Components|User/SignUp', module);

stories.add('Default', () => (
  <SettingsLayout>
    <SignUp />
  </SettingsLayout>
));
