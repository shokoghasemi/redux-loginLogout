import { Log_in, Log_out } from "../actions";

const initState = { isLogin: false, username: "", password: "" };
console.log({Log_in});
export default function login(state = initState, action) {
  switch (action.type) {
    case Log_in:
      return {
        ...state,
        isLogin: action.value
      };
    default:
      return state;
  }
}
export function logout(state = initState, action) {
  switch (action.type) {
    case Log_out:
      return {
        ...state,
        isLogin: action.value
      };
    default:
      return state;
  }
}
