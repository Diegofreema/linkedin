import React from 'react'
import Avatar from '@mui/material/Avatar';
const HeaderOption = ({Icon, title, src}) => {
  return (
    <div className="flex flex-col items-center text-gray-500 cursor-pointer hover:text-black duration-200 transition-all">
      {Icon && <Icon />}
      {/* {avatar && (
        <Avatar
          alt="Remy Sharp"
          src={avatar}
         className='w-[40px] h-[40px] rounded'
        />
      )} */}

      {src ? <img src={src} alt='profile pics' className='bg-black'/> : null}
      <h3 className="font-normal text-xs">{title}</h3>
    </div>
  );
}

export default HeaderOption