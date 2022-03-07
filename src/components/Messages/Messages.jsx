import React from 'react';
import classes from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

function Messages(props) {
  let dialogs = [
    { name: 'Dimych', id: 1 },
    { name: 'Andrey', id: 2 },
    { name: 'Viktor', id: 3 },
    { name: 'Aleksandr', id: 4 },
    { name: 'Dmitry', id: 5 },
  ];

  let messages = [
    { message: 'Hi', id: 1 },
    { message: 'How are you', id: 2 },
    { message: 'Yo', id: 3 },
  ];

  let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);

  let messagesElements = messages.map((m) => <Message message={m.message} id={m.id} />);

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
