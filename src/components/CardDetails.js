import React from 'react';
import DocumentDuplicateOutline from '../icons/DocumentDuplicateOutline.png';
import PlayOutline from '../icons/PlayOutline.png';
import ClockOutline from '../icons/ClockOutline.png';
import QuestionMark from '../icons/QuestionMarkCircleOutline.png';
import CodeOutline from '../icons/CodeOutline.png';

const CardDetails = () => {
  return (
    <div className='box-border border border-light-blue-100 rounded-[16px] '>
      <div className='bg-gradient from-[#172B4D00] via-[#172B4D] to-[#05445E00]'>
        <div className='h-[76px] flex items-center justify-between mx-8'>
          <div className='flex items-center gap-4'>
            <img src={PlayOutline} className='w-[32px] h-[32px]'></img>
            <h3 className='font-dm-sans text-[24px] font-bold leading-[44px] tracking-[-0.03em] text-justify'>Video 1</h3>
          </div>
          <div className='relative w-[108px] h-[36px] flex items-center gap-2'>
            <img src={ClockOutline}></img>
            <span className='font-dm-sans text-[24px] font-normal leading-[32px] tracking-[-0.03em] text-[#17384D]'>10:00</span>
          </div>
        </div>
        <div
          className="absolute w-[1002px] h-[0.1rem] bg-gradient-to-r from-[#172B4D00] via-[#172B4D] to-[#172B4D00] my-2"
        ></div>
        <div className='h-[76px] flex items-center justify-between mx-8'>
          <div className='flex items-center gap-4'>
            <img src={QuestionMark}></img>
            <h3 className='font-dm-sans text-[24px] font-bold leading-[44px] tracking-[-0.03em] text-justify'>Article 1</h3>
          </div>
          <div className='relative w-[108px] h-[36px] flex items-center gap-2'>
            <img src={ClockOutline}></img>
            <span className='font-dm-sans text-[24px] font-normal leading-[32px] tracking-[-0.03em] text-[#17384D]'>10:00</span>
          </div>
        </div>
        <div
          className="absolute w-[1002px] h-[0.1rem] bg-gradient-to-r from-[#172B4D00] via-[#172B4D] to-[#172B4D00] my-2"
        ></div>
        <div className='h-[76px] flex items-center justify-between mx-8'>
          <div className='flex items-center gap-4'>
            <img src={QuestionMark}></img>
            <h3 className='font-dm-sans text-[24px] font-bold leading-[44px] tracking-[-0.03em] text-justify'>Quiz 1</h3>
          </div>
          <div className='relative w-[108px] h-[36px] flex items-center gap-2'>
            <img src={ClockOutline}></img>
            <span className='font-dm-sans text-[24px] font-normal leading-[32px] tracking-[-0.03em] text-[#17384D]'>10:00</span>
          </div>
        </div>
        <div
          className="absolute w-[1002px] h-[0.1rem] bg-gradient-to-r from-[#172B4D00] via-[#172B4D] to-[#172B4D00] my-2"
        ></div>
        <div className='h-[76px] flex items-center justify-between mx-8'>
          <div className='flex items-center gap-4'>
            <img src={CodeOutline}></img>
            <h3 className='font-dm-sans text-[24px] font-bold leading-[44px] tracking-[-0.03em] text-justify'>Coding exercise 1</h3>
          </div>
          <div className='relative w-[108px] h-[36px] flex items-center gap-2'>
            <img src={ClockOutline}></img>
            <span className='font-dm-sans text-[24px] font-normal leading-[32px] tracking-[-0.03em] text-[#17384D]'>10:00</span>
          </div>
        </div>
        <div
          className="absolute w-[1002px] h-[0.1rem] bg-gradient-to-r from-[#172B4D00] via-[#172B4D] to-[#172B4D00] my-2"
        ></div>
        <div className='h-[76px] flex items-center justify-between mx-8'>
          <div className='flex items-center gap-4'>
            <img src={DocumentDuplicateOutline}></img>
            <h3 className='font-dm-sans text-[24px] font-bold leading-[44px] tracking-[-0.03em] text-justify'>Combined Resource 1</h3>
          </div>
          <div className='relative w-[108px] h-[36px] flex items-center gap-2'>
            <img src={ClockOutline}></img>
            <span className='font-dm-sans text-[24px] font-normal leading-[32px] tracking-[-0.03em] text-[#17384D]'>10:00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetails