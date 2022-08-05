import React from "react";
import ChangeTheme from "./ChangeTheme";
import Login from "./Login";
import Profile from "./Profile";

function Home() {
  return (
    <div className="main-container">
      <div className="user-profile-container">
        <Profile />
        <Login />
      </div>

      <ChangeTheme />
    </div>
  );
}

export default Home;
