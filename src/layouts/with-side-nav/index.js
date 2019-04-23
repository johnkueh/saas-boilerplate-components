import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import SideNav from '../../components/side-nav';

const WithSideNav = ({ children, title }) => (
  <>
    <div className={styles.wrapper}>
      <SideNav />
      <div className={styles.stage}>
        <h4 className="mb-4">{title}</h4>
        {children}
      </div>
    </div>
  </>
);

export default WithSideNav;

WithSideNav.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
