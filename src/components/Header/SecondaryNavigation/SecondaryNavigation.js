import React from 'react';

import { Button, NavBar, Link } from '@gymnasium/gym-ui';

import GymnasiumLogo from '../../../images/gymnasium-logo-white.svg';

import classes from './SecondaryNavigation.module.css';

const SecondaryNavigation = ({ isLoggedIn = false }) => {
  const leftContent = (
    <Link css={classes.logoLink} to="/">
      <img
        className={classes.gymnasiumLogo}
        alt="Aquent Gymnasium"
        src={GymnasiumLogo}
        width="200"
        height="23"
        role="heading"
        aria-level="2"
      />
    </Link>
  );
  const rightContent = (
    <>
      <Link isLight to="/courses">
        Courses
      </Link>
      <Link isLight to="/jobs">
        Jobs
      </Link>
      <Link isLight to="/about">
        About
      </Link>
      {isLoggedIn ? (
        <Link isLight to="/dashboard">
          Dashboard
        </Link>
      ) : (
        <Button to="/login">Log In</Button>
      )}
    </>
  );
  return (
    <NavBar
      backgroundColor="#222"
      height="70px"
      rightContent={rightContent}
      leftContent={leftContent}
    />
  );
};

export default SecondaryNavigation;
