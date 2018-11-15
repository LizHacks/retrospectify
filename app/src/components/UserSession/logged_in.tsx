
import * as React from 'react';

const UserStatusBadge = ({userData}:{userData: any}) => (
  <div>
    <div>This is an avatar</div>
    <div><strong>{userData.name}</strong></div>
  </div>
);

const LoggedInState = ({userData}:{userData: any}) => (
  <div>
    <div className="user-session__user-menu-btn">
      <button className="user-session__user-status-badge"><UserStatusBadge userData={userData}/></button>
    </div>
    <div className="user-session__user-menu--hidden">
      <div><button className="user-session__user-menu__menu-btn">This</button></div>
      <div><button className="user-session__user-menu__menu-btn">will</button></div>
      <div><button className="user-session__user-menu__menu-btn">be</button></div>
      <div><button className="user-session__user-menu__menu-btn">a</button></div>
      <div><button className="user-session__user-menu__menu-btn">list</button></div>
      <div><button className="user-session__user-menu__menu-btn">of</button></div>
      <div><button className="user-session__user-menu__menu-btn">buttons</button></div>
    </div>
  </div>
);

export default LoggedInState;
