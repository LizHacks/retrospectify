import * as React from 'react';
import {connect} from 'react-redux';

import NotLoggedInState from './not_logged_in';
import LoggedInState from './logged_in';
import SigningUpState from './sign_up';
import LoginForm from './LoginForm';

import {startLoginAction, startSignupAction, startLoadingState, userLogin} from '../../actions/auth';

class UserSession extends React.PureComponent<any, any>{
  handleStartLoginClick = () => {
    this.props.dispatch(startLoginAction());
  }
  handleStartSignUpClick = () => {
    this.props.dispatch(startSignupAction());
  }

  handleSignUp = () => {
    this.props.dispatch(startLoadingState());
  }

  backToIdle = () => {
    this.props.dispatch(startLoginAction());
  }

  handleLogin = () => {
    this.props.dispatch(startLoadingState());
    setTimeout(() => {this.props.dispatch(userLogin({
      name: "Bobby Beans",
      email: "bobby@beans.com",
      id: "350598470958",
    }));}, 500);
  }
  render_unwrapped() {
    console.log(this.props.auth);
    if(this.props.auth.is_logged_in) {
      return (<div><LoggedInState userData={this.props.auth.current_user}/></div>);
    } else if (this.props.auth.is_logging_in) {
      return (<LoginForm loginAction={this.handleLogin}/>);
    } else if (this.props.auth.is_signing_up) {
      return (<SigningUpState
        signupAction={this.handleSignUp}
        returnToLoginAction={this.backToIdle}
        />);
    } else if (this.props.auth.is_loading) {
      return (<div>Loading...</div>);
    } else {
      return (<div><NotLoggedInState
        loginAction={this.handleStartLoginClick}
        signupAction={this.handleStartSignUpClick}
      /></div>);
    }
  }
  render() {
    return (<div className="auth-container">{this.render_unwrapped()}</div>)

  }
}

export default connect(s => s)(UserSession);
