import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import profilePageReducer from "./reducerProfilePage.jsx";
import dialogsPageReducer from "./reducerDialogsPage.jsx";
import usersReducer from "./reducerUsers.js";
import authReducer from "./reducerAuth";
import thunkMiddkeware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profilePageReducer,
  messagePage: dialogsPageReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddkeware));
window.store = store;

export default store;
