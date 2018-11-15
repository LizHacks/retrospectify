import * as React from 'react';

const LoginForm = ({loginAction}: {loginAction: any}) => (
  <div>
    <div className="user-session__user-menu--hidden">
      <form>
        <div>username: <input name="username"/></div>
        <div>password: <input name="password" type="password"/></div>
        <div><button onClick={loginAction}>Login</button></div>
      </form>
    </div>
  </div>
);

export default LoginForm;
