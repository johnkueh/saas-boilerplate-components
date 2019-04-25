import React from 'react';
import { storiesOf } from '@storybook/react';
import RequestResetPassword from './index';

const stories = storiesOf('Components|request-reset-password', module);

stories.add('Default', () => <RequestResetPassword />);
