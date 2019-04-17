import React from 'react';
import { storiesOf } from '@storybook/react';
import SettingsLayout from '../../components/layouts/settings';
import SignUp from './index';

const stories = storiesOf('Components|User/SignUp', module);

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

stories.add('Default', () => (
  <SettingsLayout>
    <SignUp onSubmit={onSubmit} />
  </SettingsLayout>
));

stories.add('with Errors', () => (
  <SettingsLayout>
    <SignUp
      onSubmit={onSubmit}
      errors={[
        { message: 'First name is required' },
        { message: 'Last name is required' },
        { message: 'Email is required' },
        { message: 'Email is not an email' }
      ]}
    />
  </SettingsLayout>
));
