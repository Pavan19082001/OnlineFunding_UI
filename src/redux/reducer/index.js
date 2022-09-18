import { combineReducers } from "redux";
import loggedReducer from "./loggedReducer";
import { LoginReducer } from "./loginReducer";
import { postReducer } from './postReducer';
import { UserReducer } from "./userReducer";

const allReducers = combineReducers({
    login: loggedReducer,
    user: UserReducer,
    Login: LoginReducer,
    allposts: postReducer,
});

export default allReducers;