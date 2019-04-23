import React from 'react';
import { storiesOf } from '@storybook/react';
import Layout from '../../components/layouts/settings';
import LogIn from './index';

const stories = storiesOf('Components|User/LogIn', module);

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

stories.add('default', () => (
  <Layout>
    <LogIn onSubmit={onSubmit} />
  </Layout>
));

stories.add('with Errors', () => (
  <Layout>
    <LogIn
      onSubmit={onSubmit}
      errors={[{ message: 'Please check your credentials and try again.' }]}
    />
  </Layout>
));
