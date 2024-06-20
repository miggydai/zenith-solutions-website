'use client';
import React from 'react'

const FounderCard = () => {
  return (
    <div className='rounded-md flex flex-col gap-10 bg-white w-[60vw] p-6'>
        {/* Top section */}
        <div className='flex gap-10'>
            {/* Picture */}
            <div className='bg-gray-500 w-[15rem] h-[15rem]'>
                <h1>Picture</h1>
            </div>
            {/* Deets */}
            <div className='flex flex-col gap-4 justify-center'>
                <h1 className='text-5xl font-bold text-black'>Diego gomez</h1>
                <p className='text-gray-300'>Founder</p>
                <p className='text-gray-300'>Icons</p>
            </div>
        </div>
        {/* Long paragraph */}
        <div className='flex flex-col gap-10 text-black'>
            <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eius aliquam. Fuga fugiat a reiciendis odit recusandae iure facilis, voluptates maiores accusamus voluptatibus aut quisquam tempora dolor nostrum facere blanditiis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eius aliquam. Fuga fugiat a reiciendis odit recusandae iure facilis, voluptates maiores accusamus voluptatibus aut quisquam tempora dolor nostrum facere blanditiis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eius aliquam. Fuga fugiat a reiciendis odit recusandae iure facilis, voluptates maiores accusamus voluptatibus aut quisquam tempora dolor nostrum facere blanditiis?</p>
           
            </div>
            <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eius aliquam. Fuga fugiat a reiciendis odit recusandae iure facilis, voluptates maiores accusamus voluptatibus aut quisquam tempora dolor nostrum facere blanditiis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eius aliquam. Fuga fugiat a reiciendis odit recusandae iure facilis, voluptates maiores accusamus voluptatibus aut quisquam tempora dolor nostrum facere blanditiis?</p>
            
            </div>
            
        </div>
    </div>
  )
}

export default FounderCard