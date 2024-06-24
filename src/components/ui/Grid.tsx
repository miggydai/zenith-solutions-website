import React from 'react'

const Grid = () => {
  return (
    <div>
       <div className="grid grid-cols-5 gap-4 p-4 bg-red-200">
   
    <div className="grid grid-rows-2 gap-4">
      <div className="bg-blue-500 h-[30vh]">1A</div>
      <div className="bg-blue-600">1B</div>
    </div>
    
 
    <div className="col-span-2 row-span-2 bg-green-500">2-3A</div>
    
  
    <div className="col-span-2 bg-red-500">4-5A</div>
    <div className="grid grid-cols-2 col-span-2 gap-4">
      <div className="bg-red-600">4B</div>
      <div className="bg-red-700">5B</div>
    </div>
  </div>
    </div>
  )
}

export default Grid