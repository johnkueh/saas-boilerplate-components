import React from 'react';
import { storiesOf } from '@storybook/react';
import SignUp from './index';

const stories = storiesOf('Components|sign-up', module);

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

stories.add('Default', () => <SignUp onSubmit={onSubmit} />);

stories.add('with Errors', () => (
  <SignUp
    onSubmit={onSubmit}
    errors={[
      { message: 'First name is required' },
      { message: 'Last name is required' },
      { message: 'Email is required' },
      { message: 'Email is not an email' }
    ]}
  />
));
