'use client';
import React from 'react'

const FounderCard = () => {
  return (
    <div className='rounded-md flex flex-col gap-10 bg-white w-[60vw] p-6 shadow-2xl drop-shadow-2xl w-[70vw]'>
        {/* Top section */}
        <div className='flex gap-10'>
            {/* Picture */}
            <div className='bg-gray-500 w-[15rem] h-[15rem]'>
                <h1>Picture</h1>
            </div>
            {/* Deets */}
            <div className='flex flex-col gap-4 justify-center'>
                <h1 className='text-5xl font-bold text-black'>Davinder Singh</h1>
                <p className='text-gray-300'>Founder</p>
                <p className='text-gray-300'>Icons</p>
            </div>
        </div>
        {/* Long paragraph */}
        <div className='flex flex-col text-lg gap-10 text-black'>
            <div className='flex flex-col gap-4'>
            <p>Davinder is the founder of Zenith Solutions LLC. He has over 20 years of experience in finance, accounting and technology industry. He has been in Workday ecosystem more than 8 years. He started his Workday journey with Cushman and Wakefield and worked for a Workday partner firm. </p>
            <p>He has extensive experience in different Industries such as Retail, Real-estate, Utilities, Healthcare and Higher Education. He enjoys playing tennis and cricket. He is a great fan of Sachin Tendulkar, Roger Federer and Michal Schumacher.</p>
            </div>
           
            
        </div>
    </div>
  )
}

export default FounderCard