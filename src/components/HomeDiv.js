import React from 'react';
import HomeHeader from './HomeHeader';
import HomeBell from './HomeBell';
import HomeChapter from './HomeChapter';
import HomeContent from './HomeContent';

const HomeDiv = () => {
  return (
    <div className='relative w-[1456px] h-[1527px] top-[161px] left-[400px] box-border border border-[#A4E6FF] rounded-[16px]'>
      <HomeHeader />
      <HomeBell />
      <div
        className="absolute w-[1376px] h-0 top-[162px] left-[40px] box-border border border-[#A4E6FF] opacity-40"
        style={{ transform: "rotate(0deg)" }}
      ></div>
      <HomeChapter />
      <HomeContent />
    </div>
  )
}

export default HomeDiv