import React, { useState } from 'react';
import GrowCards from './GrowCards';

const HomeContent = () => {
    const [showIndex, setShowIndex] = useState({ value: false, idx: null });
    const categories = [
        {
            part: '1',
            title: 'Lorem Ipsum Dolor Sit Amet',
            time: '02:00:00',
            mode: 'Medium',
            copies: '5',
            complete: '45',
        },
        {
            part: '2',
            title: 'Lorem Ipsum Dolor Sit Amet',
            time: '02:00:00',
            mode: 'Medium',
            copies: '12',
            complete: '20',
        },
        {
            part: '3',
            title: 'Lorem Ipsum Dolor Sit Amet',
            time: '02:00:00',
            mode: 'Medium',
            copies: '12',
            complete: '0',
        },]

    return (
        <div className='absolute w-[1002px] h-[1092px] top-[202px] left-[414px] flex flex-col gap-[8px]'>
            {categories.map((category, index) => (
                <GrowCards
                    key={index}
                    data={category}
                    setshowIndex={() =>
                        setShowIndex({
                            value: !(showIndex.idx === index && showIndex.value),
                            idx: index,
                        })
                    }
                    showItems={index === showIndex.idx && showIndex.value}
                />
            ))}
        </div>
    )
}

export default HomeContent