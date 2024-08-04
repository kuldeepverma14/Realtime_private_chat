import Navbar1 from './Navbar1'
import Search from './Search'
import Chats from './Chats'


function Sidebar() {
  return (
    <>
      <div className='flex flex-col bg-bg border-r border-lightbg rounded-s-md  h-full'>
        <Navbar1 />
        <Search />
        <div className='flex-1 overflow-y-scroll h-full  hide-scrollbar'>
          <Chats />
        </div>
      </div>

    </>
  )
}

export default Sidebar