import React from 'react'
import Navbar2 from './Navbar2'
import Message from './Message'
import MessageInput from './MessageInput'

function Chat() {
  return (
    <>
      <div className='flex flex-col bg-bg  rounded-e-md  h-full'>
        <Navbar2 />
        <div className='flex-1 overflow-y-scroll h-full w-full overflow-hidden hide-scrollbar bg-[#ecf0f1] px-5 pt-2'>
          <Message />
        </div>
        <div className='bg-lightbg  flex items-center w-full px-3 overflow-hidden'>
        <MessageInput/>
        </div>
      </div>
    </>
  )
}

export default Chat