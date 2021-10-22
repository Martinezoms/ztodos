import React, { useState } from 'react';
import '../Assets/css/main.css';
import { Menu, X } from 'react-feather';

function MenuBar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <div className="fixed right-0 z-30">
        {openMenu === false ? (
          <Menu
            size="35"
            color={'#004643'}
            className="cursor-pointer m-5 hover:opacity-50 transition duration-200 ease-in-out"
            onClick={() => setOpenMenu(true)}
          />
        ) : (
          <X
            size="35"
            color={'#004643'}
            className="cursor-pointer m-5 hover:opacity-50 transition duration-200 ease-in-out "
            onClick={() => setOpenMenu(false)}
          />
        )}
      </div>
      <div className="text-greeny">
        <div className={openMenu === true ? 'bg-lgreeny open-drawer border-greeny ' : 'bg-lgreeny close-drawer'}>
          <div className="text-xl p-10 space-y-10 flex flex-col mt-60">
            <div className="cursor-pointer hover:opacity-50 transition duration-200 ease-in-out">New list</div>
            <div className="cursor-pointer hover:opacity-50 transition duration-200 ease-in-out">Remove all lists</div>
            <div className="cursor-pointer hover:opacity-50 transition duration-200 ease-in-out">Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
