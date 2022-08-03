import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LOGIN } from "../redux/userSlice";
import useInput from "../hooks/useInput";
import "./styles/Login.scss";

function Login() {
  const dispatch = useDispatch();
  let [toggleLoginInput, setToggleLoginInput] = useState(false);

  const name = useInput();
  const age = useInput();
  const email = useInput();

  const toggleInput = () => {
    setToggleLoginInput((prev) => !prev);
  };

  const submitCtrl = (e) => {
    e.preventDefault();
    dispatch(LOGIN({ name: name.value, age: age.value, email: email.value }));
  };
  return (
    <div className="login-container">
      <button className="login-btn" onClick={toggleInput}>
        Login
      </button>
      {toggleLoginInput ? (
        <form
          onSubmit={submitCtrl}
          className="login-form"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label>Name</label>
          <input type="text" {...name} />
          <label>Age</label>
          <input {...age} />
          <label>Email</label>
          <input type="email" {...email} />
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      ) : null}
    </div>
  );
}

export default Login;
