import profilePageReducer from './reducerProfilePage.jsx'
import dialogsPageReducer from './reducerDialogsPage.jsx'




let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "I am Boss", likesCount: 199 },
        { id: 2, message: "second post", likesCount: 777 },
      ],
      newPostText: "New Post 2123",
    },
    messagePage: {
      messages: [
        { id: 1, message: "qwerty" },
        { id: 2, message: "perfect" },
        { id: 3, message: "vs code" },
        { id: 4, message: "react" },
        { id: 5, message: "desk" },
        { id: 6, message: "task" },
      ],
      newMessageBody:'',
      dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Katya" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Tolik" },
        { id: 5, name: "Anton" },
        { id: 6, name: "Vovka" },
      ],
    },
  },
  _callSubscriber() {
    console.log('State changed');
},

getState() {
    // debugger;
    return this._state;
},
subscribe(observer) {
    this._callSubscriber = observer;  // observer
},
  dispatch(action) {

    this._state.profilePage = profilePageReducer(this._state.profilePage, action)
    this._state.messagePage = dialogsPageReducer(this._state.messagePage, action)
    this._callSubscriber(this._state);

    // if (action.type === ADD_POST) {
    //   let post = {
    //     id: 5,
    //     message: this._state.profilePage.newPostText,
    //     likesCount: 0,
    //   };
    //   this._state.profilePage.posts.push(post);
    //   this._state.profilePage.newPostText = "";
    //   this._callSubscriber(this._state);
    // } else if (action.type === UPDATE_POST_TEXT) {
    //   this._state.profilePage.newPostText = action.PostText;
    //   this._callSubscriber(this._state);
    // }
    // else if (action.type === UPDATE_MESSAGE_BODY) {
    //   this._state.messagePage.newMessageBody = action.body;
    //   this._callSubscriber(this._state);
    // }
    // else if (action.type === SEND_MESSAGE) {
    //   let body = this._state.messagePage.newMessageBody
    //   this._state.messagePage.newMessageBody =''
    //   this._state.messagePage.messages.push({ id: 7, message: body })
    //   this._callSubscriber(this._state);
    // }
    
  },
};





window.store = store;
export default store;