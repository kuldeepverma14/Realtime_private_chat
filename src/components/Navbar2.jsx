
import Search from './Search';
import { FaVideo } from 'react-icons/fa';
import { HiOutlinePhoneMissedCall } from 'react-icons/hi';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';
import ImageComponent from './ImageComponent';
import mypic from "../assets/mypic.jpeg"
function Navbar2() {

    return (
        <>
            <header className='text-white flex justify-between bg-[#2c3e50] px-3  py-4 rounded-tr-md'>
                <div className='flex gap-2 items-center'>
                    <ImageComponent mypic={mypic} h={3} w={3} />
                    <h1 className='flex-auto w-[70%]'>
                        kdsdsfdbsaghvbhbhbhjhbjjjjjjjjj1</h1>
                </div>
                <div className='flex flex-auto w-[70%] items-center justify-end gap-2 ' >
                    <Search />
                    <div><FaVideo size={20} /></div>
                    <div><HiOutlinePhoneMissedCall size={20} />
                    </div>
                    <div><PiDotsThreeOutlineVerticalFill size={20} />
                    </div>

                </div>
            </header>
        </>
    )
}

export default Navbar2