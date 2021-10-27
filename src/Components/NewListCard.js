import React from 'react';
import { FilePlus } from 'react-feather';

function NewListCard() {
  return (
    <div>
      <div className="box border-2 border-solid border-greeny m-5 shadow-lg rounded-lg flex justify-center bg-greeny transition duration-300 ease-in-out cursor-pointer hover:shadow-2xl hover:opacity-75 list-card">
        <FilePlus size="50" color={'#e8e4e6'} className="flex self-center file" />
      </div>
    </div>
  );
}

export default NewListCard;
