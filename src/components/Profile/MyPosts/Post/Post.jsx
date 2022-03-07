import React from 'react';
import classes from './Post.module.css';

function Post(props) {
  console.log(props.messages);
  return (
    <div className={classes.post}>
      <img
        className={classes.post__img}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU"></img>
      <div className={classes.post__info}>{props.message}</div>
      <div>
        <span>Likes: </span> {props.likesCount}
      </div>
    </div>
  );
}

export default Post;
