import React from 'react'
import CardDetails from './CardDetails';
import VectorDown from '../icons/Vector.png';
import VectorUp from '../icons/Vector (1).png';
import ClockOutline from '../icons/ClockOutline.png';
import BarChart from '../icons/ChartBarOutline.png';
import Copy from '../icons/DocumentDuplicateOutline.png';

const GrowCards = ({ data, setshowIndex, showItems }) => {
    const watchtime = (data.complete * 1002) / 100;
    const handleClick = () => {
        setshowIndex();
    };

    return (
        <>
            <div className='relative w-[1002px] h-[160px] box-border border border-light-blue-100 bg-[#ffffff] rounded-[16px]'>
                <div className='absolute w-[388px] h-[53px] top-[38px] left-[32px]'>
                    <h1 className='font-dm-sans text-[24px] font-normal leading-[44px] tracking-[-0.03em] text-justify max-h-fit'>PART {data.part}</h1>
                    <h1 className='font-dm-sans text-[28px] font-bold leading-[44px] tracking-[-0.03em] text-justify max-h-fit'>{data.title}</h1>
                </div>
                <div className='absolute w-[421px] h-[36px] top-[46px] left-[594px] flex box-border border border-[#FFFFFF]'>
                    <div className='w-[368px] h-[38px] flex items-center justify-end gap-4'>
                        <img src={ClockOutline}></img>
                        <h2 className='font-dm-sans text-[24px] font-normal leading-[32px] tracking-[-0.03em] text-right text-[#17384D]'>{data.time}</h2>
                        <img src={BarChart}></img>
                        <h2 className='font-dm-sans text-[24px] font-normal leading-[32px] tracking-[-0.03em] text-right text-[#17384D]'>{data.mode}</h2>
                        <img src={Copy}></img>
                        <h2 className='font-dm-sans text-[24px] font-normal leading-[32px] tracking-[-0.03em] text-right text-[#17384D]'>{data.copies}</h2>
                        <img className='w-[29px] h-[16px] box-border border border-[#FFFFFF] cursor-pointer' onClick={handleClick} src={showItems ? VectorUp : VectorDown}></img>
                    </div>
                </div>
                <div className='absolute w-[162px] h-[34px] top-[106px] left-[808px] box-border border border-[#99e4ff] bg-[#eff5ff] rounded-[8px] py-[4px] px-[10px] gap-[10px] flex'>
                    <h1 className='font-dm-sans text-[20px] font-normal leading-[26.04px] tracking-[-0.03em] text-right'>{data.complete}%</h1>
                    <h1 className='font-dm-sans text-[20px] font-normal leading-[26.04px] tracking-[-0.03em] text-right'>Completed</h1>
                </div>
            </div>
            <div className='flex'>
                <div
                    style={{ width: `${watchtime}px` }}
                    className='h-[10px] rounded-bl-xl bg-custom-blue'>
                </div>
                <div 
                    style={{borderRadius: watchtime==0 ? '0 0 0.75rem 0.75rem':'0 0 0.75rem 0'}}
                    className='w-[1002px] h-[10px] border border-black'>
                </div>
            </div>
            {showItems && <CardDetails />}
        </>

    )
}

export default GrowCards