import React from 'react';
import { Smile } from 'react-feather';

function List() {
  return (
    <div>
      <div className="list bg-lgreeny border-2 border-greeny">
        <div className="text-greeny flex justify-between text-sm border-b-2 border-greeny">
          <div className="rounded-md p-1 bg-ashy border-2 hover:bg-lgreeny hover:border-greeny cursor-pointer transition duration-200 ease-in-out m-3">
            Cancel
          </div>
          <div className="rounded-md p-1 bg-ashy border-2 hover:bg-lgreeny hover:border-greeny cursor-pointer transition duration-200 ease-in-out m-3">
            Save
          </div>
        </div>
        <div className="list-area bg-ashy"></div>
        <div>
          <div className="flex justify-between m-2 content-center">
            <span>
              <Smile color={'#004643'} size="40" className="cursor-pointer m-2 smile" />
            </span>
            <input placeholder="Type something..." className="list-input rounded-full py-3 px-6 mr-4"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
