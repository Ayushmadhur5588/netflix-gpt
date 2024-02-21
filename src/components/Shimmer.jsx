import React from 'react'

const Shimmer = () => {
  return (
    <div className="bg-black text-white mx-4 p-4 m-4 bg-opacity-50 h-screen rounded-lg">
    <div className='h-16 w-72 mb-10 bg-black bg-opacity-65 rounded-lg animate-pulse'></div>
    <div className='flex justify-between'>
    <div className='w-48 h-56 bg-black bg-opacity-65 rounded-lg animate-pulse'></div>
    <div className='w-48 h-56 bg-black bg-opacity-65 rounded-lg animate-pulse'></div>
    <div className='w-48 h-56 bg-black bg-opacity-65 rounded-lg animate-pulse'></div>
    <div className='w-48 h-56 bg-black bg-opacity-65 rounded-lg animate-pulse'></div>
    <div className='w-48 h-56 bg-black bg-opacity-65 rounded-lg animate-pulse'></div>
    </div>
    <div className='w-72 h-16 mb-10 mt-10 bg-black bg-opacity-65 rounded-lg animate-pulse'></div>
    <div className='flex justify-between'>
    <div className='w-48 h-56 bg-black bg-opacity-65 rounded-lg animate-pulse'>g</div>
    <div className='w-48 h-56 bg-black bg-opacity-65 rounded-lg animate-pulse'></div>
    <div className='w-48 h-56 bg-black bg-opacity-65 rounded-lg animate-pulse'></div>
    <div className='w-48 h-56 bg-black bg-opacity-65 rounded-lg animate-pulse'></div>
    <div className='w-48 h-56 bg-black bg-opacity-65 rounded-lg animate-pulse'></div>
    </div>
    </div>
  )
}

export default Shimmer