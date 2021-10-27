import React from 'react';
import { Smile } from 'react-feather';

function List({ setPage }) {
  return (
    <div className="list-container">
      <div className="list bg-lgreeny border-2 border-greeny">
        <div className="text-greeny flex justify-between text-sm border-b-2 border-greeny">
          <div
            className="rounded-md p-1 bg-ashy border-2 hover:bg-lgreeny hover:border-greeny cursor-pointer transition duration-200 ease-in-out m-3"
            onClick={() => setPage()}
          >
            Cancel
          </div>
          <div
            className="rounded-md p-1 bg-ashy border-2 hover:bg-lgreeny hover:border-greeny cursor-pointer transition duration-200 ease-in-out m-3"
            onClick={() => setPage()}
          >
            Save
          </div>
        </div>
        <div className="list-area bg-ashy content-center"></div>
        <div>
          <div>
            <div className="flex justify-between m-2 content-center input-container">
              <span>
                <Smile color={'#004643'} size="40" className="cursor-pointer m-2 smile" />
              </span>
              <input placeholder="Type something..." className="list-input rounded-full py-3 px-6 mr-4"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
