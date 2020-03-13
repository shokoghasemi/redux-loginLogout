import { Log_in, Log_out } from "../actions";
import {isLogin} from "../types"

const initState = { isLogin: false};
export default function login(state = initState, action:any) {
  switch (action.type) {
    case Log_in:
      return {
        ...state,
        isLogin: action.payload
      };
 
    case Log_out:
      return {
        ...state,
        isLogin: action.payload
      };
    default:
      return state;
  }
}
