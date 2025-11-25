import React from 'react'

const Education = () => {
  return (
    <>
      <section className='bg-white min-h-screen'>
        <div className='flex flex-col justify-center items-center'>
            <div>
            <h1 className='md:text-6xl text-6xl font-extrabold py-10'>Education</h1>
            </div>
            <div className='flex flex-col items-center justify-normal lg:justify-center space-x-4'>
                <img className='w-[180px] md:w-[250px]' src="/images/collegeLogo.png" alt="College Logo" />
                <div className='text-center'>
                <p className='text-2xl font-semibold'>Government Bangla College</p>
                <h1 className='text-slate-700'>Bachelor of Business Administration</h1>
                <p className='text-slate-700 font-semibold'>Marketing</p>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Education