import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Messages.module.css';

const DialogItem = (props) => {
  return (
    <div className={classes.dialogItem}>
      <NavLink
        className={(dialogData) => (dialogData.isActive ? classes.active + ' ' + classes.dialog : classes.dialog)}
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
  return (
    <div className={classes.dialogs}>
      <h2 className={classes.messages__title}>DIALOGS</h2>
      <div className={classes.messages__wrapper}>
        <div className={classes.messages__dialogs}>
          <DialogItem name="Viktor" id="2" />
          <DialogItem name="Dmitry" id="1" />
          <DialogItem name="Andrey" id="3" />
          <DialogItem name="Dmitry" id="4" />
          <DialogItem name="Aleksandr" id="5" />
        </div>
        <div className={classes.messages__content}>
          <Message message="Hi" />
          <Message message="How are you" />
          <Message message="Yo" />
        </div>
      </div>
    </div>
  );
}

export default Messages;
