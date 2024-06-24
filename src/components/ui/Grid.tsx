import React from 'react'

const Grid = () => {
  return (
    <div>
       <div className="grid grid-cols-5 gap-4 p-4">
   
    <div className="grid grid-rows-2 gap-4">
      <div className="bg-yellow-200 h-[30vh] rounded-2xl">1A</div>
      <div className="bg-gray-300 rounded-2xl">1B</div>
    </div>
    
 
    <div className="col-span-2 row-span-2 bg-gray-500 rounded-2xl">2-3A</div>
    
  
    <div className="col-span-2 bg-gray-500 rounded-2xl">4-5A</div>
    <div className="grid grid-cols-2 col-span-2 gap-4">
      <div className="bg-blue-600 rounded-2xl">4B</div>
      <div className="bg-gray-700 rounded-2xl">5B</div>
    </div>
  </div>
    </div>
  )
}

export default Grid