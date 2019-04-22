import React from 'react';
import SideNav from '../side-nav';
import styles from './styles.module.scss';

const Dashboard = props => (
  <>
    <div className={styles.wrapper}>
      <SideNav />
      <div className={styles.stage}>
        <h4>Dashboard</h4>
        <div className="my-3 card p-3">
          <div>Title</div>
        </div>
      </div>
    </div>
  </>
);

export default Dashboard;

Dashboard.propTypes = {};
