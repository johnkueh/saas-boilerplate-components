import React from 'react';
import { storiesOf } from '@storybook/react';
import SignUp from '../components/sign-up';
import LogIn from '../components/log-in';
import RequestResetPassword from '../components/request-reset-password';

const stories = storiesOf('Auth elements', module);

stories.add('Sign up', () => <SignUp />);
stories.add('Log in', () => <LogIn />);
stories.add('Reset Password', () => <RequestResetPassword />);
