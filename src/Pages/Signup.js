import React from 'react';
import { SignupIntro } from '../Components/Intros';
import SignupBox from '../Components/SignupBox';

function Signup() {
  return (
    <div className="flex flex-col login-body items-center content-center">
      <SignupIntro />
      <SignupBox />
      <div className="m-5 text-greeny">
        Maybe you already have an account{' '}
        <span role="img" aria-label="thinking">
          🤔
        </span>
        <div className="text-center m-2 text-bluey cursor-pointer hover:underline "> login &#10141;</div>
      </div>
    </div>
  );
}

export default Signup;
