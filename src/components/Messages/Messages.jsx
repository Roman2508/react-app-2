import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Messages.module.css';

const DialogItem = (props) => {
  return (
    <div className={classes.dialogItem}>
      <NavLink
        className={(dialogData) =>
          dialogData.isActive ? classes.active + ' ' + classes.dialog : classes.dialog
        }
        to={'/messages/' + props.id}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

function Messages(props) {
  let dialogsData = [
    { name: 'Dimych', id: 1 },
    { name: 'Andrey', id: 2 },
    { name: 'Viktor', id: 3 },
    { name: 'Aleksandr', id: 4 },
    { name: 'Dmitry', id: 5 },
  ];

  let messagesData = [
    { message: 'Hi', id: 1 },
    { message: 'How are you', id: 2 },
    { message: 'Yo', id: 3 },
  ];

  return (
    <div className={classes.dialogs}>
      <h2 className={classes.messages__title}>DIALOGS</h2>
      <div className={classes.messages__wrapper}>
        <div className={classes.messages__dialogs}>
          <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
          <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
          <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
          <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
          <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        </div>
        <div className={classes.messages__content}>
          <Message message={messagesData[0].message} />
          <Message message={messagesData[1].message} />
          <Message message={messagesData[2].message} />
        </div>
      </div>
    </div>
  );
}

export default Messages;
