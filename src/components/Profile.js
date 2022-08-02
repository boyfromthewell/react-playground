import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOG_OUT } from "../redux/userSlice";
import "./styles/Profile.scss";

function Profile() {
  const user = useSelector((state) => state.user.value);

  const dispatch = useDispatch();

  const logOutCtrl = () => {
    dispatch(LOG_OUT());
  };
  console.log(user);
  return (
    <div className="profile-container">
      <div style={{ marginLeft: 30 }}>
        <h1>Profile Page</h1>
        <p>name : {user.name}</p>
        <p>age : {user.age}</p>
        <p>email : {user.email}</p>
      </div>
      <button onClick={logOutCtrl}>로그아웃</button>
    </div>
  );
}

export default Profile;
