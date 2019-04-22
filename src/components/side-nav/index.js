import React from 'react';
import styles from './styles.module.scss';

const SideNav = props => (
  <>
    <div className={styles.wrapper}>
      <div className={styles.brand}>
        <div>
          <img alt="logo" height="35" src="logo-square.svg" />
        </div>
        <div>v2food.com</div>
      </div>
      <div className={styles.links}>
        <div className={styles.title}>Single</div>
        <a href="#">Homepage</a>
        <div className={styles.title}>Multiple</div>
        <a href="#">Feature</a>
        <a href="#">Feature with icons</a>
        <div className={styles.title}>Assets</div>
        <a href="#">All assets</a>
        <div className={styles.title}>Account</div>
        <a href="#">John Kueh</a>
      </div>
    </div>
  </>
);

export default SideNav;

SideNav.propTypes = {};
