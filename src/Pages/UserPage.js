import React from 'react';
import { UserIntro } from '../Components/Intros';
import MenuBar from '../Components/MenuBar';
import Userlists from '../Components/Userlists';

const Userpage = () => {
  return (
    <div>
      <div className="flex flex-row justify-between ">
        <UserIntro />
        <MenuBar />
      </div>
      <Userlists />
    </div>
  );
};

export default Userpage;
