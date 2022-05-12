import React from "react";
import DialogsClasses from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={DialogsClasses.dialog}>
          <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
  )
}

export default DialogItem;