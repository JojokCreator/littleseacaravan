import React from 'react'
import Image from 'next/image';
import { sliderData } from './SliderData';

const Photos = ({ mainImage, header, image1, image2, image3, image4 }) => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
        <h1 className="font-bold text-2xl p-4">{header}</h1>
        <div className="grid grid-rows-none md:grid-cols-5 p-4 md:gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
            <Image 
                src={mainImage}
                alt='/'
                layout="responsive"
                width="677px"
                height="451px"
            />
        </div>
        <div className='w-full h-full'>
        <Image 
                src={image1}
                alt='/'
                layout="responsive"
                width="215px"
                height="217px"
                odjectFit="cover"
            />
        </div>
        <div className='w-full h-full'>
        <Image 
                src={image2}
                alt='/'
                layout="responsive"
                width="215px"
                height="217px"
                odjectFit="cover"
            />
        </div>
        <div className='w-full h-full'>
        <Image 
                src={image3}
                alt='/'
                layout="responsive"
                width="215px"
                height="217px"
                odjectFit="cover"
            />
        </div>
        <div className='w-full h-full'>
        <Image 
                src={image4}
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