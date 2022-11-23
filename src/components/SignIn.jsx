import React, { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import * as Auth from "../utils/cognito";

const SignIn = () => {
  const { setStatus } = useAuthContext()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    Auth.authenticate(username, password)
      .then((data) => {
        console.log("Log In Success")
        setStatus("LoggedIn")
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>SignIn</h2>
      <div>
        <div>
          <label htmlFor="username">Email</label>
          <input
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>SignIn</button>
      </div>
    </div>
  );
};

export default SignIn;
