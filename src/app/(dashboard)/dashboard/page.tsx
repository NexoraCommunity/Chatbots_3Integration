import React from 'react'

const page = () => {
  return (
    <div>
      <div className='grid grid-cols-3 gap-5'>
        <div className='rounded-xl w-full h-[250px] shadow-xl/20'>
        </div>
        <div className='rounded-xl w-full h-[250px] shadow-xl/20'>
        </div>
        <div className='rounded-xl w-full h-[250px] shadow-xl/20'>
        </div>
      </div>
      <div className='w-full h-[400px] rounded-xl shadow-xl/20'>

      </div>
      <div className='grid grid-cols-3'>
        <div className='rounded-xl w-full h-[200px] shadow-xl/20'></div>
        <div className='rounded-xl w-full h-[200px] shadow-xl/20'></div>
        <div className='rounded-xl w-full h-[200px] shadow-xl/20'></div>
      </div>
    </div>
  )
}

export default page