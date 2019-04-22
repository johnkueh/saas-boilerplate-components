import React from 'react';
import { storiesOf } from '@storybook/react';
import Dashboard from './index';

const stories = storiesOf('Components|Pages/Dashboard', module);

stories.add('Default', () => <Dashboard />);
