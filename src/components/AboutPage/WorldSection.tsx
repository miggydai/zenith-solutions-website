import React from 'react'
import Map from '../ui/Map'



const WorldSection = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10 p-10'>
        <div>
            <h1 className='text-6xl font-bold text-blue-300'>Meet our team worldwide!</h1>
        </div>
        <div className='w-3/4'>
            <Map />
        </div>
    </div>
  )
}

export default WorldSection