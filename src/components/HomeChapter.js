import React from 'react';
import Clock from '../icons/ClockOutline.png';

const HomeChapter = () => {
  const count = [2, 3, 4, 5];

  return (
    <div className="absolute w-[420px] h-[399px] top-[202px] left-[40px] flex flex-col">
      <div className="h-[82px] w-[342px] py-[25px] px-[16px] rounded-[8px] bg-[#EFF5FF] flex gap-[72px] items-center">
        <h1 className="font-dm-sans text-[24px] font-bold leading-[44px] tracking-[-0.03em] text-justify">
          Chapter 1
        </h1>
        <div className='flex items-center gap-2'>
          <img src={Clock}></img>
          <span className='font-dm-sans text-[22px] font-normal leading-[32px] tracking-[-0.03em] text-[#608AD2] text-right'>05:00:00</span>
        </div>
      </div>

      {count.map((cnt, index) => (
        <div className="h-[82px] w-[420px] bg-gradient-to-r from-[#8FDFFF00] via-[#8FDFFF] to-[#8FDFFF00] rounded-[8px] p-[1.5px]">
          <h1 key={index} className="font-dm-sans bg-white py-[25px] px-[16px] text-[24px] font-normal leading-[44px] tracking-[-0.03em] text-justify">
            Chapter {cnt}
          </h1>
        </div>
      ))}
    </div>

  )
}

export default HomeChapter