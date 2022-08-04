import React from 'react'
import Image from 'next/image';
import { sliderData } from './SliderData';

const Photos = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
        <h1 className="font-bold text-2xl p-4">Stay Photos</h1>
        <div className="grid grid-rows-none md:grid-cols-5 p-4 md:gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
            <Image 
                src="/page.jpg" 
                alt='/'
                layout="responsive"
                width="677px"
                height="451px"
            />
        </div>
        <div className='w-full h-full'>
        <Image 
                src="/275732175_241467038113189_8935177250275147484_n 2.jpg" 
                alt='/'
                layout="responsive"
                width="215px"
                height="217px"
                odjectFit="cover"
            />
        </div>
        <div className='w-full h-full'>
        <Image 
                src="/275551190_843788480352029_6462475543474946434_n.jpg" 
                alt='/'
                layout="responsive"
                width="215px"
                height="217px"
                odjectFit="cover"
            />
        </div>
        <div className='w-full h-full'>
        <Image 
                src="/277979504_667783274489354_4614835511071287641_n.jpg" 
                alt='/'
                layout="responsive"
                width="215px"
                height="217px"
                odjectFit="cover"
            />
        </div>
        <div className='w-full h-full'>
        <Image 
                src="/278111153_1048985652629691_6184023553561585616_n.jpg" 
                alt='/'
                layout="responsive"
                width="215px"
                height="217px"
                odjectFit="cover"
            />
            </div>
        </div>
    </div>
  )
}

export default Photos