import React from 'react';
import { storiesOf } from '@storybook/react';
import Layout from '../../components/layouts/settings';
import SignUp from './index';

const stories = storiesOf('Components|User/SignUp', module);

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

stories.add('Default', () => (
  <Layout>
    <SignUp onSubmit={onSubmit} />
  </Layout>
));

stories.add('with Errors', () => (
  <Layout>
    <SignUp
      onSubmit={onSubmit}
      errors={[
        { message: 'First name is required' },
        { message: 'Last name is required' },
        { message: 'Email is required' },
        { message: 'Email is not an email' }
      ]}
    />
  </Layout>
));
