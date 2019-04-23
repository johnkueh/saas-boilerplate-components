import React from 'react';
import Layout from '../layouts/with-side-nav';
import UpdateUser from '../components/update-user';

const Account = () => (
  <Layout title="Account">
    <div className="row">
      <div className="col-md-4">
        <UpdateUser />
      </div>
    </div>
  </Layout>
);

export default Account;
