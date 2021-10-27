import React from 'react';
import '../Assets/css/main.css';
import NewListCard from './NewListCard';

function Userlists({ setShowModal }) {
  return (
    <div className="">
      <div className="m-5 border-2 border-solid border-greeny user-list grid grid-cols-6 gap-4 place-items-center">
        <div onClick={() => setShowModal(true)}>
          <NewListCard />
        </div>

        <NewListCard />
        <NewListCard />
        <NewListCard />
        <NewListCard />
        <NewListCard />
        <NewListCard />
        <NewListCard />
      </div>
    </div>
  );
}

export default Userlists;
