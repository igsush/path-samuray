import React from "react";
import DialogsClasses from "./../Dialogs.module.css";
const Message = (props) => {
  return <div className={DialogsClasses.message}>{props.message}</div>;
};

export default Message;
