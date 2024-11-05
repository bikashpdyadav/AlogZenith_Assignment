import React from 'react';
import Calendar from '../icons/CalendarOutline.png';
import BriefCase from '../icons/BriefcaseOutline.png';

const HomeHeader = () => {
  return (
    <div className='relative w-[563px] h-[82px] top-[40px] left-[40px] bg-gradient-to-b from-[#EFF5FF] to-bg-light-blue-transparent rounded-[14.67px]'>
      <div className='absolute w-[528px] h-[62px] top-[11px] left-[15px] rounded-[11px] flex'>
        <div className='flex items-center w-[258px] h-[61px] gap-[12px] px-[20px] py-[12px] rounded-[11px]'>
          <img src={Calendar}></img>
          <span className='font-dm-sans text-[22px] font-normal leading-[36.67px] tracking-[-0.03em] text-center'>Mentor Sessions</span>
        </div>
        <div className='absolute w-[258px] h-[61px] bg-gradient-to-r from-[#05445E] to-[#D2E3FF] left-[270px] rounded-[11px] p-[0.92px]'>
          <div className='bg-white flex items-center px-[12px] py-[12px] gap-[12px]'>
            <img src={BriefCase}></img>
            <span className='font-dm-sans text-[22px] font-bold leading-[36.67px] tracking-[-0.03em] text-center'>Learning Material</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader