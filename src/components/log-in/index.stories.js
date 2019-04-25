import React from 'react';
import { storiesOf } from '@storybook/react';
import LogIn from './index';

const stories = storiesOf('Components|log-in', module);

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

stories.add('default', () => <LogIn onSubmit={onSubmit} />);

stories.add('with Errors', () => (
  <LogIn
    onSubmit={onSubmit}
    errors={[{ message: 'Please check your credentials and try again.' }]}
  />
));
