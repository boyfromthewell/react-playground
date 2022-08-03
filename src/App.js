import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeTheme from "./components/ChangeTheme";
function App() {
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

export default App;
