import React from 'react';
import styles from './styles.module.scss';

const SideNav = props => (
  <>
    <div className={styles.wrapper}>
      <div>
        <img alt="logo" width="100" src="full-logo-black.svg" />
      </div>
      <div className={styles.links}>
        <div className={styles.title}>Single</div>
        <a href="#">Homepage</a>
        <div className={styles.title}>Multiple</div>
        <a href="#">Feature</a>
        <a href="#">Feature with icons</a>
        <div className={styles.title}>Assets</div>
        <a href="#">All assets</a>
        <a href="#">Upload new asset</a>
        <div className={styles.title}>Account</div>
        <a href="#">John Kueh</a>
      </div>
    </div>
  </>
);

export default SideNav;

SideNav.propTypes = {};
