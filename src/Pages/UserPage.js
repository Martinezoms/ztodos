import React, { useState } from 'react';
import { UserIntro } from '../Components/Intros';
import MenuBar from '../Components/MenuBar';
import Userlists from '../Components/Userlists';
import CreateListModal from '../Components/CreateListModal';

const Userpage = ({ setPage }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {showModal && <CreateListModal setShowModal={setShowModal} setPage={setPage} />}
      <div className="flex flex-row justify-between ">
        <UserIntro />
        <MenuBar />
      </div>
      <div>
        <Userlists setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default Userpage;
