const UPDATE_MESSAGE_BODY = "UPDATE-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "qwerty" },
    { id: 2, message: "perfect" },
    { id: 3, message: "vs code" },
    { id: 4, message: "react" },
    { id: 5, message: "desk" },
    { id: 6, message: "task" },
  ],
  newMessageBody: "",
  dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Katya" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Tolik" },
    { id: 5, name: "Anton" },
    { id: 6, name: "Vovka" },
  ],
};

const dialogsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_BODY:
      return { ...state, newMessageBody: action.body };

    case SEND_MESSAGE:
      
      let body = state.newMessageBody;

      return {
        ...state,
        newMessageBody: "",
        messages: [
          ...state.messages,
          { id: state.messages.length + 1, message: body },
        ],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return { type: SEND_MESSAGE };
};

export const updateNewMessageBodyCreator = (message) => {
  return { type: UPDATE_MESSAGE_BODY, body: message };
};

export default dialogsPageReducer;
