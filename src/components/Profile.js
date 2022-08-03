import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOG_OUT } from "../redux/userSlice";
import "./styles/Profile.scss";

function Profile() {
  const user = useSelector((state) => state.user.value);
  const color = useSelector((state) => state.theme.value);

  const dispatch = useDispatch();

  const logOutCtrl = () => {
    dispatch(LOG_OUT());
  };

  return (
    <div className="profile-container" style={{ color: `${color}` }}>
      <div style={{ marginLeft: 30 }}>
        <h1>Profile Page</h1>
        <p>Name : {user.name}</p>
        <p>Age : {user.age}</p>
        <p>Email : {user.email}</p>
      </div>
      <div className="logout-btn">
        <button onClick={logOutCtrl}>로그아웃</button>
      </div>
    </div>
  );
}

export default Profile;
