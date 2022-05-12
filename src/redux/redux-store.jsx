import { combineReducers, legacy_createStore } from "redux";
import profilePageReducer from './reducerProfilePage.jsx'
import dialogsPageReducer from './reducerDialogsPage.jsx'

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagePage: dialogsPageReducer
})


let store = legacy_createStore(reducers);

export default store;