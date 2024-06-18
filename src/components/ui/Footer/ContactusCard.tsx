import React from 'react'

const ContactusCard = () => {
  return (
    <div className='bg-yellow-600 w-2/4 p-5 h-96 flex rounded-2xl'>
        <div className='w-1/2 flex flex-col gap-6'>
            {/* Header of contacts */}
            <h1 className='text-5xl pb-5 text-gray-800'>Contact us</h1>
            {/* Email */}
            <div>
            <h3 className='text-sm text-blue-900'>Email</h3>
            <p className='text-blue-900'>enquiry@znthsolutions.com</p>
            </div>
            {/* Mobile number */}
            <div>
            <h3 className='text-sm text-blue-900'>Mobile</h3>
            <p className='text-blue-900'>+6392736849234</p>
            </div>
            {/* Icons */}
            <div>
            <p>Icons</p>
            </div>
        </div>
        {/* Email form */}
        <div className='flex align-center items-center justify-center w-1/2'>
            <form className='flex justify-left w-full'>
            {/* Text field */}
            <div className='flex flex-col gap-4 px-4 w-full'>
                <div className='flex flex-col w-full'>
                <label className='text-sm text-blue-900 pb-5'>
                    Full name
                </label>
                <input type='text' className='w-full bg-transparent border-0 border-b-2 border-blue-900 outline-none'/>
                </div>

                <div className='flex flex-col w-full'>
                <label className='text-sm text-blue-900 pb-5'>
                    Email
                </label>
                <input type='text' className='w-full bg-transparent border-0 border-b-2 border-blue-900 outline-none'/>
                </div>

                <div className='flex flex-col w-full'>
                <label className='text-sm text-blue-900 pb-5'>
                    Mobile
                </label>
                <input type='text' className='w-full bg-transparent border-0 border-b-2 border-blue-900 outline-none'/>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default ContactusCard