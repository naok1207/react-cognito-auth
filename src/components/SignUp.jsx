import React, { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import * as Auth from "../utils/cognito";

const SignUp = () => {
  const { setStatus } = useAuthContext()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    Auth.signUp(username, password).then(() => {
      console.log('Sign Up Success');
      setStatus('SignedIn')
    });
  };

  return (
    <div>
      <h2>SignUp</h2>
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
        <button onClick={handleClick}>SignUp</button>
      </div>
    </div>
  );
};

export default SignUp;
