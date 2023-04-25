import React from 'react';
import { AiOutlineSearch, AiFillLinkedin, AiFillHome } from 'react-icons/ai';
import { MdSupervisorAccount, MdBusinessCenter } from 'react-icons/md';  
import { IoMdNotifications } from 'react-icons/io';  
import { BsFillChatFill } from 'react-icons/bs';  
import HeaderOption from './HeaderOption';
import { Avatar } from '@mui/material';
// import Me from '../assets/me.jpg'
const Header = () => {
  return (
    <header className="flex items-center justify-evenly sticky top-0 z-40 left-0 right-0 border py-2 w-full">
      <div className="left flex space-x-1 items-center">
        <AiFillLinkedin color="blue" size={40} />
        <div className="search p-1 rounded-sm flex items-center text-[gray] bg-[#eef3f8] space-x-1 flex-1">
          <AiOutlineSearch size={20} />
          <input
            type="text"
            className="bg-transparent outline-none border-none"
          />
        </div>
      </div>
      <div className="right flex items-center space-x-3">
        <HeaderOption title="Home" Icon={AiFillHome} />
        <HeaderOption title="My Network" Icon={MdSupervisorAccount} />
        <HeaderOption title="Jobs" Icon={MdBusinessCenter} />
        <HeaderOption title="Messages" Icon={BsFillChatFill} />
        <HeaderOption title="Notifications" Icon={IoMdNotifications} />

        <div className="flex flex-col justify-center items-center cursor-pointer">
          <div className="rounded-full overflow-hidden">
            <Avatar
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              className="flex-1 w-[25px] h-[25px] object-contain "
            />
          </div>
          <h3 className="font-normal text-xs">{'Me'}</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
