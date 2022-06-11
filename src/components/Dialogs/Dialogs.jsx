import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import DialogsClasses from "./Dialogs.module.css";
import Message from "./Messsage/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={DialogsClasses.dialogs}>
      <div className={DialogsClasses.dialogsItems}>{dialogsElements}</div>
      <div className={DialogsClasses.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            onChange={onNewMessageChange}
            value={newMessageBody}
            placeholder="text"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;