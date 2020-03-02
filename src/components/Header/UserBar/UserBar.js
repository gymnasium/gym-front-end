import React from 'react';
import { useSelector } from 'react-redux';

import {
  Button,
  color,
  GymIcon,
  NavBar,
  UserLogoutMenu,
} from '@gymnasium/gym-ui';

const UserBar = () => {
  const authState = useSelector(state => state.auth);
  const { isLoggedIn, user } = authState;

  const leftContent = !isLoggedIn && <Button isSmall>Sign Up</Button>;
  const rightContent = (
    <>
      {isLoggedIn && (
        <UserLogoutMenu userId={user.id} logoutUrl={process.env.LOGOUT_URL} />
      )}
      <GymIcon
        name="Aquent Icon"
        src="https://thegymnasium.com/static/gymnasium/images/aquent-icon.56d05be37e9a.png"
        href="https://www.aquent.com"
      />
      <GymIcon
        name="Vitamin T Icon"
        src="https://thegymnasium.com/static/gymnasium/images/vitamin-t-icon.32e5d567b8ca.png"
        href="https://vitamintalent.com/"
      />
    </>
  );
  return (
    <NavBar
      backgroundColor={color.trueblack}
      height="50px"
      leftContent={leftContent}
      rightContent={rightContent}
    />
  );
};

export default UserBar;
