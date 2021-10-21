import React from 'react';
import { LoginIntro } from '../Components/Intros';
import LoginBox from '../Components/LoginBox';
import '../Assets/css/main.css';

function Login() {
  return (
    <div className="flex flex-col login-body items-center content-center">
      <LoginIntro />
      <LoginBox />
    </div>
  );
}

export default Login;
