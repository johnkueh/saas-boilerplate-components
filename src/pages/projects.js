import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/no-side-nav';

const Projects = () => (
  <Layout title="Here's all your projects" caption="Select one to access it's dashboard">
    <ul class="list-group">
      <li class="list-group-item">
        <NavLink to="/dashboard">v2food.com</NavLink>
      </li>
      <li class="list-group-item">
        <NavLink to="/dashboard">johnkueh.com</NavLink>
      </li>
      <li class="list-group-item">
        <NavLink to="/dashboard">zibbetmarketing.com</NavLink>
      </li>
    </ul>
    <div className="mt-4">
      <span className="text-muted">or</span> <Link to="/projects/new">Create a new project</Link>
    </div>
  </Layout>
);

const NavLink = ({ to, children }) => (
  <Link className="d-flex justify-content-between align-items-center" to={to}>
    <div>{children}</div>
    <i className="fal fa-chevron-right" />
  </Link>
);

export default Projects;
