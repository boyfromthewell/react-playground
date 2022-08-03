import React from "react";
import "./styles/ChangeTheme.scss";
import { useDispatch } from "react-redux";
import { CHANGE_COLOR } from "../redux/changeThemeSlice";
function ChangeTheme() {
  const dispatch = useDispatch();
  const color = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "darkblue",
    "purple",
  ];
  return (
    <div className="change-theme-container">
      <p>Change Your Theme!</p>
      <div className="color-container">
        {color.map((item, idx) => {
          return (
            <div
              className="paint"
              key={idx}
              style={{ backgroundColor: `${item}` }}
              onClick={() => {
                dispatch(CHANGE_COLOR(item));
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default ChangeTheme;
