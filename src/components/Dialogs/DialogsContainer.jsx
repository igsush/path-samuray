import React from "react";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/reducerDialogsPage";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
  
  return <StoreContext.Consumer>
      { store => {
        let state = store.getState();
        console.log(store.getState().messagePage)
          let onSendMessageClick = () => {
              store.dispatch(sendMessageCreator());
          }
          let onNewMessageChange = (body) => {
              store.dispatch(updateNewMessageBodyCreator(body));
          }
          return  <Dialogs updateNewMessageBody={onNewMessageChange}
                   sendMessage={onSendMessageClick}
                   dialogsPage={state.messagePage}/>
      }
  }
  </StoreContext.Consumer>
}
  export default DialogsContainer;
