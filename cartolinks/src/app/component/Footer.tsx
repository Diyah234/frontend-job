import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row justify-between items-center p-4 px-5 bg-[#2f2f2f] text-white '>
        <div className='flex flex-row gap-2 items-center'>
            <h1 className='bg-black rounded-lg text-3xl p-1 px-3 font-bold'>K</h1>
            <h1 className='text-2xl'>Krea AI</h1>
        </div>
        <div className='flex flex-row gap-4'>
            <h1 className='text-2xl'>curated by</h1>
            <h1 className='text-3xl font-bold'>Mobbin</h1>
        </div>
    </div>
  )
}

export default Footer