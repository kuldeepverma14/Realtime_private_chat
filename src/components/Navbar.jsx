import { useNavigate } from 'react-router-dom';
import mypic from "../assets/mypic.jpeg"

function Navbar() {
  const navigate = useNavigate()

  const SignOutUser = () => {
    localStorage.removeItem('chatToken');
    localStorage.removeItem('chatUID');
    navigate('/signin');
  }

  return (
    <>
      <header className='text-white flex justify-between bg-[#2c3e50] px-3 py-5 rounded-t-md shadow-lg'>
        <div> logo </div>
        <div className='flex items-center gap-2 ' >
          <img src={mypic} className='h-10 w-10 rounded-full object-cover' alt="" />
          <h1>kd</h1>
          <button className='p-2 bg-lightbg rounded shadow-2xl text-white hover:bg-bg font-semibold' onClick={SignOutUser}>Logout</button>
        </div>
      </header>
    </>
  )
}

export default Navbar