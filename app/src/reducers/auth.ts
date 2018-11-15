import { 
  TEST_AUTH_ACTION,
  AUTH_START_LOGIN,
  AUTH_START_SIGNUP,
  AUTH_LOADING_STATE,
  USER_LOGIN,
} from '../actions/auth';

export const defaultState = { something: 0 };

export default function auth(state = defaultState, action = {} as any) {
  switch(action.type) {
    case TEST_AUTH_ACTION:
      return {
        ...state,
        is_loading: false,
        something: state.something + action.something
      }
    case AUTH_START_LOGIN:
      return {
        ...state,
        is_logged_in: false,
        is_logging_in: true,
        is_signing_up: false,
        is_loading: false,
      }
    case AUTH_START_SIGNUP:
      return {
        ...state,
        is_logged_in: false,
        is_logging_in: false,
        is_signing_up: true,
        is_loading: false,
      }
    case AUTH_LOADING_STATE:
      return {
        ...state,
        is_logged_in: false,
        is_logging_in: false,
        is_signing_up: false,
        is_loading: true,
      }
    case USER_LOGIN:
      return {
        ...state,
        is_logged_in: true,
        is_logging_in: false,
        is_signing_up: false,
        is_loading: false,
        current_user: action.user,
      }
		default:
			return state
	}
}
