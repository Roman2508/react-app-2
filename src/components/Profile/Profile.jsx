import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

function Profile() {
  return (
    <div className={classes.content}>
      <div className={classes.content__img}></div>

      <div>ava + desc</div>
      <MyPosts />
    </div>
  );
}

export default Profile;
