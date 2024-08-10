import { useNavigate } from 'react-router-dom';
import mypic from "../assets/mypic.jpeg"
import ImageComponent from './ImageComponent';

function Navbar1() {
  const navigate = useNavigate()

  const SignOutUser = () => {
    localStorage.removeItem('chatToken');
    localStorage.removeItem('chatUID');
    navigate('/login');
  }

  return (
    <>
      <header className='text-white flex justify-between bg-[#2c3e50] px-3  py-5 rounded-ss-md '>
        <div className='flex items-center'> logo </div>
        <div className='flex items-center gap-2 ' >
          <ImageComponent mypic={mypic} h={3} w={3} />
          <h1>kuldeep verma</h1>
          <button className='p-2 bg-lightbg rounded shadow-2xl text-white hover:bg-bg font-semibold' onClick={SignOutUser}>Logout</button>
        </div>
      </header>
    </>
  )
}

export default Navbar1