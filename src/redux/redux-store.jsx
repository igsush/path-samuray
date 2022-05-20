import { combineReducers, legacy_createStore } from "redux";
import profilePageReducer from './reducerProfilePage.jsx'
import dialogsPageReducer from './reducerDialogsPage.jsx'
import usersReducer from "./reducerUsers.js";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagePage: dialogsPageReducer,
    usersPage: usersReducer
})


let store = legacy_createStore(reducers);
window.store = store

export default store;