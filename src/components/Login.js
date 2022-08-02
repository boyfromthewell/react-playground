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

  console.log(name);
  const toggleInput = () => {
    setToggleLoginInput((prev) => !prev);
  };

  const submitCtrl = (e) => {
    e.preventDefault();
    dispatch(LOGIN({ name: name.value, age: age.value, email: email.value }));
  };
  return (
    <div className="login-container">
      <button onClick={toggleInput}>Login</button>
      {toggleLoginInput ? (
        <form
          onSubmit={submitCtrl}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label>Name</label>
          <input type="text" {...name} />
          <label>Age</label>
          <input {...age} />
          <label>Email</label>
          <input type="email" {...email} />
          <button type="submit">ㄹㅇ 로그인</button>
        </form>
      ) : null}
    </div>
  );
}

export default Login;
