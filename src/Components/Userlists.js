import React from 'react';
import NewListCard from './NewListCard';

function Userlists({ setShowModal }) {
  return (
    <div>
      <div className="m-5 border-2 border-solid border-greeny user-list grid grid-cols-6 place-items-center ">
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
