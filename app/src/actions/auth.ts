export const TEST_AUTH_ACTION = 'TEST_AUTH_ACTION';
export const AUTH_START_LOGIN = 'AUTH_START_LOGIN';
export const AUTH_START_SIGNUP = 'AUTH_START_SIGNUP';
export const AUTH_LOADING_STATE = 'AUTH_LOADING_STATE';
export const USER_LOGIN = 'USER_LOGIN';

export function testAuthAction(something: any) {
  return {
    type: TEST_AUTH_ACTION,
    something
  }
}

export function startLoginAction() {
	return {
    type: AUTH_START_LOGIN,
	}
}

export function startSignupAction() {
	return {
    type: AUTH_START_SIGNUP,
	}
}

export function startLoadingState() {
  return {
    type: AUTH_LOADING_STATE,
  }
}

export function userLogin(user: any) {
  return {
    type: USER_LOGIN,
    user,
  }
}
