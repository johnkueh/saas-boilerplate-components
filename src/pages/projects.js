import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/no-side-nav';

const Projects = () => (
  <Layout title="Here's all your projects" caption="Select one to access it's dashboard">
    <Link className="d-block" to="/dashboard">
      v2food.com
    </Link>
    <Link className="d-block" to="/dashboard">
      johnkueh.com
    </Link>
    <Link className="d-block" to="/dashboard">
      zibbetmarketing.com
    </Link>
    <div className="mt-4">
      <span className="text-muted">or</span> <Link to="/projects/new">Create a new project</Link>
    </div>
  </Layout>
);

export default Projects;
