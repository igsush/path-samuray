import React from "react";
import { NavLink } from "react-router-dom";
import DialogsClasses from "./Dialogs.module.css";


const DialogItem = (props) => {
  return (
    <div className={DialogsClasses.dialog}>
          <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
  )
}

const Message = (props) => {
  return (
    <div className={DialogsClasses.message}>{props.message}</div>
  )
}


const Dialogs = () => {

  let dialogs =[
    {id: 1, name:"Dima"},
    {id: 2, name:"Katya"},
    {id: 3, name:"Sveta"},
    {id: 4, name:"Tolik"},
    {id: 5, name:"Anton"},
    {id: 6, name:"Vovka"}
  ]

let messages =[
  {id: 1, message:"hello"},
  {id: 2, message:"perfect"},
  {id: 3, message:"vs code"},
  {id: 4, message:"react"},
  {id: 5, message:"desk"},
  {id: 6, message:"task"}
]

let dialogsElements =  dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
let messagesElements = messages.map( m => <Message message={m.message}/> );


  return (
    <div className={DialogsClasses.dialogs}>
      <div className={DialogsClasses.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={DialogsClasses.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
