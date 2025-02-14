import { userSelector } from "../../redux/auth/selectors";
import s from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  return (
    <div className={s.nav}>
      <span>Welcome, {user.name}</span>
      <button className={s.button} onClick={() => dispatch(logout)}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
