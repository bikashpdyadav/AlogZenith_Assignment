import React from 'react';
import MenuItems from './MenuItems';
import Menu from '../icons/Menu.png';

const SideBar = () => {
  return (
    <div className='absolute w-[267px] h-[566px] top-[64px] left-[78px] flex'>
      <div className='relative w-[251px] h-[40px] l-[16px]' >
        <img src={Menu} className='absolute top-[4px] left-[20px]'></img>
        <h1 className='absolute w-[195px] h-[40px] left-[56px] text-[#172B4D] text-[28px] font-black mx-2'>AlgoZenith</h1>
      </div>
      <div className='absolute top-[99px] left-[20px]'>
        <MenuItems />
      </div>
    </div>
  )
}

export default SideBar;