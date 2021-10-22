import React from 'react';
import NewListCard from './NewListCard';

function Userlists() {
  return (
    <div>
      <div className="m-5 border-2 border-solid border-greeny user-list grid grid-cols-6 place-items-center">
        <NewListCard />
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
