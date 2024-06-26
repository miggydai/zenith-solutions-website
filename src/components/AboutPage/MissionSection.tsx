import React from 'react'

const MissionSection = () => {
  return (
    <div className='flex justify-center items-center bg-gray-100 py-[10rem]'>
        <div className='flex flex-col gap-12 w-1/2'>
        <div>
            <h1 className='text-black text-6xl font-bold'>What is our <span className='text-orange-500'>Mission?</span></h1>
        </div>
        <div>
            <p className='text-black text-lg'>Our mission is to provide excellent customer service with integrity and accountability. We value
            commitment to community involvement and inclusivity because we believe it is crucial in
            today’s business landscape. At Zenith, we dedicate ourselves to being socially responsible,
            culturally-inclusive and trustworthy partners.</p>
        </div>
        </div>
    </div>
  )
}

export default MissionSection