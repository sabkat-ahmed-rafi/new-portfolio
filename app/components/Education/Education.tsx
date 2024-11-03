import Image from 'next/image'
import React from 'react'

const Education = () => {
  return (
    <>
        <section>
        <div className='flex flex-col lg:flex-row justify-between items-center md:mx-[85px] mx-[5px] lg:mt-[150px] pb-[100px]'>
            <div>
            <h1 className='md:text-3xl text-xl font-extrabold  text-slate-700'>Education</h1>
            </div>
            <div className='flex items-center justify-normal lg:justify-center space-x-4'>
                <Image className='w-[100px]' src="/images/collegeLogo.png" alt="College Logo" />
                <div>
                <p className='text-2xl font-semibold'>Government Bangla College</p>
                <h1 className='text-slate-700'>Bachelor of Business Administration (2023-24)</h1>
                <p className='text-slate-700 font-semibold'>Marketing</p>
                </div>
            </div>
            
        </div>
        </section>
    </>
  )
}

export default Education