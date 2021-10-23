import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Smile } from 'react-feather';

function CreateListModal({ setShowModal }) {
  return (
    <div>
      <AnimatePresence>
        <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
          <div className="back-drop ">
            <X
              color="white"
              size="30"
              className="cursor-pointer fixed right-0 m-4"
              onClick={() => setShowModal(false)}
            />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.4 }}>
              <div className="bg-lgreeny text-greeny shadow-md rounded-lg  p-16 flex flex-col items-center  justify-center space-y-10 pt-20 w-1/2 create-list">
                <div className="space-y-2">
                  <div>What is this list for?</div>
                  <div className="wrapper ">
                    <input spellCheck="false" maxLength="20" placeholder="Insert title" className="modal-input" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div>How do you feel about it?</div>
                  <div className="wrapper">
                    <input spellCheck="false" maxLength="3" placeholder="Insert emoji" className="modal-input" />
                    <span className="icon">
                      <Smile size="35" className="cursor-pointer" />
                    </span>
                  </div>
                </div>
                <div className="rounded-full py-3 px-6 bg-ashy border-2 hover:bg-lgreeny hover:border-greeny cursor-pointer transition duration-200 ease-in-out">
                  Create
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default CreateListModal;
