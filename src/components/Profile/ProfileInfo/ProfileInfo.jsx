import classes from './ProfileInfo.module.css';

function ProfileInfo(props) {
  return (
    <div>
      <div className={classes.content__img}></div>
      <div>ava + desc</div>
    </div>
  );
}

export default ProfileInfo;
