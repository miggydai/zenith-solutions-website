import React from 'react'
import FounderCard from '../ui/FounderCard'

const FounderSection = () => {
  return (
    <div className='h-screen flex flex-col gap-10 justify-center items-center py-[5rem] '>
        <div>
            <h1 className='text-6xl font-bold text-orange-400'>Meet Our Founder</h1>
        </div>
        <div className=''>
        <FounderCard />
        </div>
       
    </div>
  )
}

export default FounderSection