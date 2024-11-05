import React from 'react';
import Bell from '../icons/Vector (2).png';

const MainHeader = () => {
  return (
    <div className='absolute w-[140px] h-[63px] top-[58px] left-[1716px] flex gap-[10px] items-center'>
      <div className='py-[12px] px-[15px]'>
        <img src={Bell}></img>
      </div>
      <div className="w-[63px] h-[63px] bg-[#D9D9D9] rounded-full"></div>
    </div>
  )
}

export default MainHeader