import React from 'react'
import InstagramImg from './InstagramImg'
import Link from 'next/link'


const Instagram = ({images}) => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-3xl font-bold'>Follow us on Instagram</p>
      <Link href="https://www.instagram.com/littlesea_caravan/">
        <p className='text-2xl pb-4 hover:cursor-pointer hover:opacity-70'>@littlesea</p>
    </Link>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={"/275732175_241467038113189_8935177250275147484_n.jpg"}/>
            <InstagramImg socialImg={"/275471047_1070011113548560_3448120782974078495_n.jpg"}/>
            <InstagramImg socialImg={"/275479870_361931885941449_2329734142031350467_n.jpg"}/>
            <InstagramImg socialImg={"/277979504_667783274489354_4614835511071287641_n.jpg"}/>
            <InstagramImg socialImg={"/a2569b59-fadc-4997-b873-d2fd7acd6f2c.jpg"}/>
            <InstagramImg socialImg={"/278075197_312388834337296_8826556924680014577_n.jpg"}/>
            </div>
    </div>
  )
}

export default Instagram