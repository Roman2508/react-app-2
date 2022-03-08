import classes from './ProfileInfo.module.css';

function ProfileInfo(props) {
  return (
    <div>
      <div>
        <img
          className={classes.image}
          src="https://images6.alphacoders.com/568/thumb-1920-568500.jpg"
        />
      </div>
      <div>ava + desc</div>
    </div>
  );
}

/* className={classes.content__img} */

export default ProfileInfo;
