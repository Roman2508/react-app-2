import React from 'react';
import classes from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

function Messages(props) {
  let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);

  let messagesElements = props.state.messages.map((m) => <Message message={m.message} id={m.id} />);

  return (
    <div className={classes.dialogs}>
      <h2 className={classes.messages__title}>DIALOGS</h2>
      <div className={classes.messages__wrapper}>
        <div className={classes.messages__dialogs}>{dialogsElements}</div>
        <div className={classes.messages__content}>{messagesElements}</div>
      </div>
    </div>
  );
}

export default Messages;
