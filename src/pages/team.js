import React from 'react';
import Layout from '../layouts/with-side-nav';
import CreateTeam from '../components/create-team';
import UpdateTeam from '../components/update-team';

const Team = () => (
  <Layout title="Team">
    <div className="row">
      <div className="col-md-4">
        <CreateTeam />
        <div className="my-5" />
        <UpdateTeam />
      </div>
    </div>
  </Layout>
);

export default Team;
