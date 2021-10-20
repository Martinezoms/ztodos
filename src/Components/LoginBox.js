import React from 'react';
import '../Assets/css/main.css';
import { User, Lock } from 'react-feather';

export default function LoginBox() {
  return (
    <div className="bg-lgreeny text-greeny shadow-md rounded-lg h-2/4 w-3/12 p-10 flex flex-col items-center space-y-10">
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
      <div className="rounded-full py-3 px-6 bg-ashy border-2 hover:bg-lgreeny hover:border-greeny cursor-pointer transition duration-200 ease-in-out">
        Login
      </div>
      <div className="text-sm">
        New to Ztodos? <span className="text-bluey cursor-pointer hover:underline">Create an account</span>
      </div>
    </div>
  );
}
