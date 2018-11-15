import * as React from 'react';

export const SigningUpState = ({signupAction, returnToLoginAction}: {signupAction: any, returnToLoginAction: any}) => (
  <div className="container">
    <form method="GET" action="">
      <div>Username: <input name="username"></input></div>
      <div>Password: <input name="password" type="password"></input></div>
      <div>Email: <input name="email"></input></div>
      <div><button onClick={signupAction}>Sign up </button></div>
      <div><button onClick={returnToLoginAction}>Return to Login</button></div>
    </form>
  </div>
);

export default SigningUpState;
