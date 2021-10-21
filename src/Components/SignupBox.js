import React from 'react';
import '../Assets/css/main.css';
import { User, Lock } from 'react-feather';

function SignupBox() {
  return (
    <div className="bg-lgreeny text-greeny shadow-md rounded-lg  p-24 flex flex-col items-center space-y-10  pt-20">
      <div className="wrapper">
        <input spellCheck="false" maxLength="20" placeholder="Username" />
        <span className="icon">
          <User />
        </span>
      </div>
      <div className="wrapper ">
        <input spellCheck="false" maxLength="20" placeholder="Password" type="password" />
        <span className="icon">
          <Lock />
        </span>
      </div>
      <div className="wrapper ">
        <input spellCheck="false" maxLength="20" placeholder="Retype password" type="password" />
        <span className="icon">
          <Lock />
        </span>
      </div>

      <div className="rounded-full py-3 px-6 bg-ashy border-2 hover:bg-lgreeny hover:border-greeny cursor-pointer transition duration-200 ease-in-out">
        Sign up
      </div>
    </div>
  );
}

export default SignupBox;
