import React from 'react';
import '../index.css';
import Grid from '../icons/ViewGridOutline.png';
import Light from '../icons/LightBulbOutline.png';
import Users from '../icons/UserGroupOutline.png';
import ClipBoard from '../icons/ClipboardOutline.png';
import Tower from '../icons/ChartBarOutline.png';
import Star from '../icons/StarOutline.png';

function MenuItems() {
    return (
        <div>
            <ul>
                <li className='font-dm-sans text-[24px] font-normal leading-[40px] tracking-[-0.03em] text-left mb-[43px] flex gap-4 items-center'>
                    <img src={Grid}></img>
                    <h1>Dashboard</h1>
                </li>
                <li className='font-dm-sans text-[24px] font-normal leading-[40px] tracking-[-0.03em] text-left mb-[43px] flex gap-4 items-center'>
                    <img src={Light}></img>
                    <h1>Learn</h1>
                </li>
                <li className='font-dm-sans text-[24px] font-normal leading-[40px] tracking-[-0.03em] text-left mb-[43px] flex gap-4 items-center'>
                    <img src={Users}/>
                    <h1>Forums</h1>
                </li>
                <li className='font-dm-sans text-[24px] font-normal leading-[40px] tracking-[-0.03em] text-left mb-[43px] flex gap-4 items-center'>
                    <img src={ClipBoard}/>
                    <h1>Upskills</h1>
                </li>
                <li className='font-dm-sans text-[24px] font-normal leading-[40px] tracking-[-0.03em] text-left mb-[43px] flex gap-4 items-center'>
                    <img src={Tower}/>
                    <h1>Contest</h1>
                </li>
                <li className='font-dm-sans text-[24px] font-normal leading-[40px] tracking-[-0.03em] text-left mb-[43px] flex gap-4 items-center'>
                    <img src={Star}/>
                    <h1 className='font-dm-sans text-[24px] font-normal leading-[40px] tracking-[-0.03em] text-left'>Leaderbord</h1>
                </li>
            </ul>
        </div>
    )
}

export default MenuItems