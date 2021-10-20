import React from 'react';
import Intro from '../Components/Intro';
import LoginBox from '../Components/LoginBox';
import '../Assets/css/main.css';

function Login() {
  return (
    <div className="flex flex-col login-body items-center content-center">
      <Intro />
      <LoginBox />
    </div>
  );
}

export default Login;
