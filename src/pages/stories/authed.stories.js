import React from 'react';
import { storiesOf } from '@storybook/react';
import Account from '../account';
import Billing from '../billing';
import Dashboard from '../dashboard';
import NewProject from '../new-project';
import Projects from '../projects';
import Settings from '../settings';
import Team from '../team';

const stories = storiesOf('Pages|Authed', module);

stories.add('account', () => <Account />);
stories.add('dashboard', () => <Dashboard />);
stories.add('billing', () => <Billing />);
stories.add('settings', () => <Settings />);
stories.add('team', () => <Team />);
stories.add('projects', () => <Projects />);
stories.add('new-project', () => <NewProject />);
