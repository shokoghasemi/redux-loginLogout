import { combineReducers } from "redux";
import login, { logout } from "./loginlogout";
export default combineReducers({ login }, { logout });
