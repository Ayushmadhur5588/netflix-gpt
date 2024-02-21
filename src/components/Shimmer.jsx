import React from 'react'

const Shimmer = () => {
  return (
    <div className="bg-black h-fit text-white mx-4 p-4 m-4 bg-opacity-50  rounded-lg">
    <div className='md:h-16 h-10 md:w-72 w-40 md:mb-10 mb-5 bg-black bg-opacity-65 rounded-lg animate-pulse'></div>
    <div className='flex justify-between'>
    <div className='md:w-48 w-28 md:h-56 h-36 bg-black bg-opacity-65 rounded-lg animate-pulse'></div>
    <div className='md:w-48 w-28 md:h-56 h-36 bg-black bg-opacity-65 rounded-lg animate-pulse'></div>
    <div className='md:w-48 w-28 md:h-56 h-36 bg-black bg-opacity-65 rounded-lg animate-pulse'></div>
    <div className='md:w-48 w-28 md:h-56 h-36 bg-black bg-opacity-65 rounded-lg animate-pulse hidden md:inline-block'></div>
    <div className='md:w-48 w-28 md:h-56 h-36 bg-black bg-opacity-65 rounded-lg animate-pulse hidden md:inline-block'></div>
    </div>
    <div className='md:h-16 h-10 md:w-72 w-40 md:mb-10 mb-5 md:mt-10 mt-5 bg-black bg-opacity-65 rounded-lg animate-pulse'></div>
    <div className='flex justify-between'>
    <div className='md:w-48 w-28 md:h-56 h-36 bg-black bg-opacity-65 rounded-lg animate-pulse'></div>
    <div className='md:w-48 w-28 md:h-56 h-36 bg-black bg-opacity-65 rounded-lg animate-pulse'></div>
    <div className='md:w-48 w-28 md:h-56 h-36 bg-black bg-opacity-65 rounded-lg animate-pulse'></div>
    <div className='md:w-48 w-28 md:h-56 h-36 bg-black bg-opacity-65 rounded-lg animate-pulse hidden md:inline-block'></div>
    <div className='md:w-48 w-28 md:h-56 h-36 bg-black bg-opacity-65 rounded-lg animate-pulse hidden md:inline-block'></div>
    </div>
    </div>
  )
}

export default Shimmer