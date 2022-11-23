import React from "react";
import { useAuthContext } from "../contexts/AuthContext";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const NotLoggedIn = () => {
  const { status, setStatus } = useAuthContext()

  const changeStatusButton = (
    <button
      onClick={() => setStatus(status === "SignIn" ? "SignUp" : "SignIn")}
    >
      {status === "SignIn" ? "SignUp" : "SignIn"}
    </button>
  );

  const render = status === "SignIn" ? <SignIn /> : <SignUp />;

  return (
    <div>
      { render }
      { changeStatusButton }
    </div>
  );
};

export default NotLoggedIn;
