import React from 'react'
import Avatar from '@mui/material/Avatar';

const SideBar = () => {
    const recentItem = (topic) => (
        <div className='flex items-center text-sm text-gray-500 font-extrabold cursor-pointer whitespace-nowrap mb-1 p-1'>
            <span>#</span>
            <p>{topic}</p>
        </div>
    );
  return (
    <div className="sidebar top-20 sticky flex-[0.2] h-fit rounded-xl text-center">
      <div className="sidebar-top flex flex-col items-center border border-gray-300 border-b-0 pb-2 bg-white rounded-tl-lg rounded-tr-lg">
        <img
          src="https://images.unsplash.com/photo-1580566176138-daa588058b59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="-mb-4 w-full object-cover h-[60px]  rounded-tl-lg rounded-tr-lg"
        />
        <Avatar className="mb-3" />
        <h2 className='text-lg'>Diego freeman</h2>
        <h4 className='text-gray-500 text-xs'>diegofreeman78@gmail.com</h4>
      </div>
      <div className="stats p-2 mb-3 border border-gray-300 bg-white rounded-br-md rounded-bl-md ">
        <div className="sidebar-stat mt-3 flex justify-between">
          <p className='text-gray-500 text-sm font-semibold whitespace-nowrap mr-2'>who viewed you</p>
          <p className=' text-sm font-bold text-[#0a88c2]' >2,343</p>
        </div>
        <div className="sidebar-stats mt-3 flex justify-between">
          <p className='text-gray-500 text-sm font-semibold'>views on post</p>
          <p className='text-sm font-bold text-[#0a88c2]'>2,343</p>
        </div>
      </div>
      <div className="bottom text-left p-3 border border-gray-300 rounded-lg mt-3 bg-white">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('software engineering')}
        {recentItem('design')}
        {recentItem('developer')}
     
      </div>
    </div>
  );
}

export default SideBar