import React from 'react';
import { storiesOf } from '@storybook/react';
import SettingsLayout from '../../components/layouts/settings';
import LogIn from './index';

const stories = storiesOf('Components|User/LogIn', module);

stories.add('Default', () => (
  <SettingsLayout>
    <LogIn />
  </SettingsLayout>
));
