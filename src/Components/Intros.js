import React from 'react';

export const LoginIntro = () => {
  return (
    <div className="text-greeny text-center pt-20 h-3/5 w-4/12">
      <h1 className="text-4xl font-semibold pb-10 ">Welcome!!!</h1>
      <h1 className="text-2xl pb-10">Please Login to access features</h1>
    </div>
  );
};

export const SignupIntro = () => {
  return (
    <div className="text-greeny text-center pt-20 mt-10 ">
      <h1 className="text-2xl pb-10">
        Sign up to enjoy Ztodos{' '}
        <span role="img" aria-label="cool">
          😎
        </span>
      </h1>
    </div>
  );
};
