import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import styles from './styles.module.scss';

const SideNav = props => (
  <>
    <div className={styles.wrapper}>
      <div className={styles.brand}>
        <div className="mr-1">
          <Link to="/dashboard">
            <img alt="logo" height="35" src="logo-square.svg" />
          </Link>
        </div>
        <DropdownButton
          variant="light"
          id="dropdown-basic-button"
          title={_.truncate('v2food.com', { length: 14 })}
        >
          <Dropdown.Item as={Link} to="/projects">
            Switch project
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/settings">
            Project settings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as={Link} to="/team">
            Team
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/account">
            Account
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/billing">
            Billing
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/logout">
            Log out
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <div className={styles.links}>
        <div className={styles.title}>Single</div>
        <Link to="/content">Homepage</Link>
        <div className={styles.title}>Multiple</div>
        <Link to="/content">Feature</Link>
        <Link to="/content">Feature with icons</Link>
        <div className={styles.title}>Assets</div>
        <Link to="/content">All assets</Link>
        <div className={styles.title}>Data</div>
        <Link to="/content">API explorer</Link>
      </div>
    </div>
  </>
);

export default SideNav;

SideNav.propTypes = {};
