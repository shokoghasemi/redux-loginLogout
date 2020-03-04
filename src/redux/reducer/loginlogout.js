import { Log_in, Log_out } from "../actions";

const initState = { isLogin: false, username: "", password: "" };
export default function login(state = initState, action) {
  switch (action.type) {
    case Log_in:
      return {
        ...state,
        isLogin: action.value
      };

    case Log_out:
      return {
        ...state,
        isLogin: action.value
      };
    default:
      return state;
  }
}
