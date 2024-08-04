import React from 'react'
import { CiSearch } from 'react-icons/ci'

function Search() {
  return (
    <>
      <div className='my-2 mx-3 text-gray-800 bg-lightbg  p-2 rounded-md flex items-center'>
        <div className='flex-shrink-0'>
          <CiSearch className='text-2xl text-gray-800' />
        </div>
        <input
          placeholder='Find a user'
          className='ml-2 text-gray-800 bg-lightbg flex-auto w-full border-none focus:outline-none placeholder-gray-500'
          type="text"
        />
      </div>
    </>
  )
}

export default Search