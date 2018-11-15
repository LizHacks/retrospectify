import * as React from 'react';

export const NotLoggedInState = ({loginAction, signupAction}: {loginAction: any, signupAction: any}) => (
  <div>
    <div>
      <button onClick={loginAction} className="auth-container__button">Login</button>
      <button onClick={signupAction} className="auth-container__button">Sign Up</button>
    </div>
  </div>
);

export default NotLoggedInState;
