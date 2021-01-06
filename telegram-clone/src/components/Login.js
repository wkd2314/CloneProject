import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from '../firebase';

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__telegram">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/2111/2111646.svg"
          alt=""
        />
        <h1>Telegram</h1>
      </div>
      <Button onClick={signIn}>Sign In</Button>
      {/* Button and ButtonIcon  uses button for css*/}
    </div>
  );
};

export default Login;
