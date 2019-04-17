import React from 'react';
import { storiesOf } from '@storybook/react';
import SettingsLayout from '../components/layouts/settings';
import SignUp from '../components/sign-up';
import LogIn from '../components/log-in';
import RequestResetPassword from '../components/request-reset-password';
import ResetPassword from '../components/reset-password';
import UpdateUser from '../components/update-user';
import CreateTeam from '../components/teams/create';
import UpdateTeam from '../components/teams/update';

const stories = storiesOf('User and team', module);

stories.add('Sign up', () => <SignUp />);
stories.add('Log in', () => <LogIn />);
stories.add('Request reset password', () => <RequestResetPassword />);
stories.add('Reset password', () => <ResetPassword />);
stories.add('Update user (no team created)', () => (
  <SettingsLayout>
    <UpdateUser />
    <CreateTeam />
  </SettingsLayout>
));
stories.add('Update user (with team)', () => (
  <SettingsLayout>
    <UpdateUser />
    <UpdateTeam />
  </SettingsLayout>
));
