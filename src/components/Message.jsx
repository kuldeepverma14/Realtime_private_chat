import React from 'react'
import mypic from "../assets/mypic.jpeg"

function Message() {
  return (
    <>
      {/* counterpart Message */}
      <div className='flex items-start justify-start gap-4 w-full mt-3'>
        <div className='flex flex-col items-start gap-5'>
          <img
            src={mypic}
            className={`h-10 w-10 object-cover rounded-full`}
            alt="not found"
          />
          <span className='text-gray-500'>Just now</span>
        </div>
        <div className='flex flex-col w-[70%]'>
          <div className='relative'>
            <p className='flex-auto break-words bg-white p-3 rounded-br-lg rounded-tr-lg relative'>
              <span
                className="absolute top-0 left-[-15px] border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[15px] border-r-white"
              ></span>
              Messagesdfsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffqwrewtreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            </p>
          </div>
          <div className='relative mt-3'>
            <img className='bg-white pt-3 px-2 pb-1 lg:w-[50%] xl:w-[40%] 3xl:w-[30%] h-[17rem] xl:h-[20rem] object-cover rounded-b-xl rounded-tr-xl' src={mypic} alt="not found" />
            <span
              className="absolute top-0 left-[-15px] border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[15px] border-r-white"
            ></span>
          </div>
        </div>
      </div>


      {/* your Message */}
      <div className='flex justify-end items-center mt-3'>
        <div className=' flex items-start justify-end gap-4 w-full '>
          <div className='flex flex-col items-end  w-[70%]'>
            <div className='relative w-full'>
              <p className='relative flex-auto break-words  bg-white p-3  rounded-b-lg rounded-s-lg'>
                <span
                  className="absolute top-0 right-[-15px] border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[15px] border-l-white"
                ></span>
                Messagesdfsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffqwrewtreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              </p>
            </div>
            <div className='relative w-full mt-3 flex justify-end'>
              <img className='relative pt-3 px-2 pb-1 bg-white lg:w-[50%] xl:w-[40%] 3xl:w-[30%] h-[17rem] xl:h-[20rem] object-coverrounded-b-xl rounded-s-xl' src={mypic} alt="not found" />
              <span
                className="absolute top-0 right-[-15px] border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[15px] border-l-white"
              ></span>
            </div>
          </div>
          <div className='flex flex-col justify-items-start items-end gap-5'>
            <img
              src={mypic}
              className={`h-10 w-10 object-cover rounded-full`}
              alt="not found"
            />
            <span className='text-gray-500'>Just now</span>
          </div>
        </div>
      </div>

      {/* your Message */}
      <div className='flex justify-end'>
        <div className=' flex items-center justify-end gap-2 w-[90%] mt-3'>
          <p className=' flex-auto break-words w-[70%] bg-bg p-3 rounded-s-lg text-white rounded-b-lg '>
            Messagesdfsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffqwrewtreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee

          </p>
          <div className='flex'>
            <img
              src={mypic}
              className={`h-10 w-10 object-cover rounded-full`}
              alt="not found"
            />
          </div>
        </div>
      </div>

      {/* counterpart Message */}
      <div className='flex items-center justify-start gap-2 w-[90%] mt-3'>
        <div className='flex items-start'>
          <img
            src={mypic}
            className={`h-10 w-10 object-cover rounded-full`}
            alt="not found"
          />
        </div>
        <p className='flex-auto break-words w-[70%] bg-white p-3 rounded-b-lg rounded-e-lg'>Messagesdfsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffqwrewtreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
      </div>
      {/* counterpart Message */}
      <div className='flex items-center justify-start gap-2 w-[90%] mt-3'>
        <div className='flex items-start'>
          <img
            src={mypic}
            className={`h-10 w-10 object-cover rounded-full`}
            alt="not found"
          />
        </div>
        <p className='flex-auto break-words w-[70%] bg-white p-3 rounded-b-lg rounded-e-lg'>Messagesdfsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffqwrewtreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
      </div>
      {/* your Message */}
      <div className='flex justify-end'>
        <div className=' flex items-center justify-end gap-2 w-[90%] mt-3'>
          <p className=' flex-auto break-words w-[70%] bg-bg p-3 rounded-s-lg text-white rounded-b-lg '>
            Messagesdfsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffqwrewtreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee

          </p>
          <div className='flex'>
            <img
              src={mypic}
              className={`h-10 w-10 object-cover rounded-full`}
              alt="not found"
            />
          </div>
        </div>
      </div>

      {/* your Message */}
      <div className='flex justify-end'>
        <div className=' flex items-center justify-end gap-2 w-[90%] mt-3'>
          <p className=' flex-auto break-words w-[70%] bg-bg p-3 rounded-s-lg text-white rounded-b-lg '>
            Messagesdfsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffqwrewtreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee

          </p>
          <div className='flex'>
            <img
              src={mypic}
              className={`h-10 w-10 object-cover rounded-full`}
              alt="not found"
            />
          </div>
        </div>
      </div>

      {/* your Message */}
      <div className='flex justify-end'>
        <div className=' flex items-center justify-end gap-2 w-[90%] mt-3'>
          <p className=' flex-auto break-words w-[70%] bg-bg p-3 rounded-s-lg text-white rounded-b-lg '>
            Messagesdfsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffqwrewtreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee

          </p>
          <div className='flex'>
            <img
              src={mypic}
              className={`h-10 w-10 object-cover rounded-full`}
              alt="not found"
            />
          </div>
        </div>
      </div>

      {/* your Message */}
      <div className='flex justify-end'>
        <div className=' flex items-center justify-end gap-2 w-[90%] mt-3' >
          <p className=' flex-auto break-words w-[70%] bg-bg p-3 rounded-s-lg text-white rounded-b-lg '>
            Messagesdfsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffqwrewtreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee

          </p>
          <div className='flex'>
            <img
              src={mypic}
              className={`h-10 w-10 object-cover rounded-full`}
              alt="not found"
            />
          </div>
        </div>
      </div>

      {/* counterpart Message */}
      <div className='flex items-center justify-start gap-2 w-[90%] mt-3'>
        <div className='flex items-start'>
          <img
            src={mypic}
            className={`h-10 w-10 object-cover rounded-full`}
            alt="not found"
          />
        </div>
        <p className='flex-auto break-words w-[70%] bg-white p-3 rounded-b-lg rounded-e-lg'>Messagesdfsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffqwrewtreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
      </div>
      {/* counterpart Message */}
      <div className='flex items-center justify-start gap-2 w-[90%] mt-3'>
        <div className='flex items-start'>
          <img
            src={mypic}
            className={`h-10 w-10 object-cover rounded-full`}
            alt="not found"
          />
        </div>
        <p className='flex-auto break-words w-[70%] bg-white p-3 rounded-b-lg rounded-e-lg'>Messagesdfsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffqwrewtreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
      </div>

    </>
  )
}

export default Message