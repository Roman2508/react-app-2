import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

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

export default DialogItem;
