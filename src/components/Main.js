import React from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import InputOption from './InputOption';
const Main = () => {
  return (
    <div className="flex-[0.6] mx-5">
      <div className="container bg-white p-3 pb-5 rounded-xl mb-5">
        <div className="feed-input border border-gray-300 flex items-center p-3 text-gray-500 pl-4 rounded-3xl">
          <MdModeEditOutline />
          <form action="" className="flex w-full ">
            <input
              type="text"
              className="flex-1 border-none outline-none font-bold  ml-3"
            />
            <button type="submit" className="hidden">
              Send
            </button>
          </form>
        </div>
        <div className="inputOptions">
          <InputOption />
        </div>
      </div>
    </div>
  );
};

export default Main;
