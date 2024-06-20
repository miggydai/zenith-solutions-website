import React from 'react';

const ContactusCard = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='bg-blue-400 p-5 w-[60vw] h-[55vh] flex rounded-2xl'>
        <div className='w-1/2 flex flex-col gap-6'>
          {/* Header of contacts */}
          <h1 className='text-5xl pb-5'>Contact us</h1>
          {/* Email */}
          <div>
            <h3 className='text-sm'>Email</h3>
            <p>enquiry@znthsolutions.com</p>
          </div>
          {/* Mobile number */}
          <div>
            <h3 className='text-sm'>Mobile</h3>
            <p>+6392736849234</p>
          </div>
          {/* Icons */}
          <div>
            <p>Icons</p>
          </div>
        </div>
        {/* Email form */}
        <div className='flex items-center justify-center w-1/2'>
          <form className='flex justify-left w-full'>
            {/* Text field */}
            <div className='flex flex-col gap-4 px-4 w-full'>
              <div className='flex flex-col w-full'>
                <label className='text-sm   pb-10'>Full name</label>
                <input type='text' className='w-full bg-transparent border-0 border-b-2   outline-none' />
              </div>

              <div className='flex flex-col w-full'>
                <label className='text-sm   pb-10'>Email</label>
                <input type='text' className='w-full bg-transparent border-0 border-b-2   outline-none' />
              </div>

              <div className='flex flex-col w-full'>
                <label className='text-sm   pb-10'>Mobile</label>
                <input type='text' className='w-full bg-transparent border-0 border-b-2   outline-none' />
              </div>
            </div>
          </form>
        </div> 
      </div>
      
    </div>
  );
}

export default ContactusCard;
