import React from 'react';
import '../Assets/css/main.css';
import { User, Lock } from 'react-feather';

function SignupBox({ setPage }) {
  return (
    <div className="bg-lgreeny text-greeny shadow-md rounded-lg  p-24 flex flex-col items-center space-y-10  pt-20">
      <div className="wrapper">
        <input spellCheck="false" maxLength="20" placeholder="Username" className="input" />
        <span className="icon">
          <User />
        </span>
      </div>
      <div className="wrapper ">
        <input spellCheck="false" maxLength="20" placeholder="Password" type="password" className="input" />
        <span className="icon">
          <Lock />
        </span>
      </div>
      <div className="wrapper ">
        <input spellCheck="false" maxLength="20" placeholder="Retype password" type="password" className="input" />
        <span className="icon">
          <Lock />
        </span>
      </div>

      <div
        className="rounded-full py-3 px-6 bg-ashy border-2 hover:bg-lgreeny hover:border-greeny cursor-pointer transition duration-200 ease-in-out"
        onClick={() => setPage('home')}
      >
        Sign up
      </div>
    </div>
  );
}

export default SignupBox;
