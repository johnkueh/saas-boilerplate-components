import React from 'react';
import { storiesOf } from '@storybook/react';
import SettingsLayout from '../../components/layouts/settings';
import LogIn from './index';

const stories = storiesOf('Components|User/LogIn', module);

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

stories.add('default', () => (
  <SettingsLayout>
    <LogIn onSubmit={onSubmit} />
  </SettingsLayout>
));

stories.add('with Errors', () => (
  <SettingsLayout>
    <LogIn
      onSubmit={onSubmit}
      errors={[{ message: 'Please check your credentials and try again.' }]}
    />
  </SettingsLayout>
));
