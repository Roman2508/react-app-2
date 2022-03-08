import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
  let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />);

  return (
    <div className={classes.myPosts}>
      <div>
        my post
        <div>
          <div>
            <textarea className={classes.textarea}></textarea>
          </div>
          <div>
            <button>Send</button>
          </div>
        </div>
        <div>{postsElements}</div>
      </div>
    </div>
  );
}

export default MyPosts;
