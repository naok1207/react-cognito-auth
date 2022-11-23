import React from "react";
import { useAuthContext } from "../contexts/AuthContext";
import * as Auth from "../utils/cognito";

const SignOut = () => {
  const { setStatus } = useAuthContext();

  const handleClick = () => {
    Auth.signOut().then(() => {
      console.log('Sign Out Success')
      setStatus()
    })
  }

  return <button onClick={handleClick}>SignOut</button>;
};

export default SignOut;
