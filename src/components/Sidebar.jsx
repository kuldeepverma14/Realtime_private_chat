import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'


function Sidebar() {
  return (
    <>
      <div className='flex flex-col bg-bg shadow-lg rounded-s-md'>
        <Navbar />
        <Search />
        <Chats />
      </div>
    </>
  )
}

export default Sidebar