import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/no-side-nav';

const Projects = () => (
  <Layout title="Add a new project">
    <label>Project name</label>
    <input autoFocus className="form-control mb-3" type="text" />
    <Link to="/dashboard" className="mt-2 btn btn-primary">
      Create project
    </Link>
    <div className="mt-4">
      <span className="text-muted">or</span> <Link to="/projects">Go back to all projects</Link>
    </div>
  </Layout>
);

export default Projects;
