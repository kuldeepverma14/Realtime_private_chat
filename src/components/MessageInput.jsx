import { useEffect, useState } from 'react';
import { BsFillSendFill } from 'react-icons/bs';
import { FiPaperclip } from 'react-icons/fi';
import { MdOutlinePermMedia } from 'react-icons/md';

function MessageInput() {
    const [clicked, setClicked] = useState(null);

   
    useEffect(() => {
        const clearTime = setTimeout(() => setClicked(null), 300); // Adjust time as needed
        return () => {
            clearTimeout(clearTime)
        }
    })

    return (
        <div className='flex items-center w-full px-3 bg-lightbg'>
            <textarea
                placeholder='Type a message'
                className='py-5 pr-10 break-words hide-scrollbar text-white bg-lightbg flex-auto w-full border-none focus:outline-none placeholder-gray-500 resize-none'
                rows={1}
            />
            <div className='flex-shrink-0 flex gap-2'>
                <button
                    onClick={()=>setClicked("paper")}
                    className={`p-2 text-white rounded-full font-semibold ${clicked==="paper" ? 'bg-[#2c3e50]' : 'hover:bg-bg'}`}
                >
                    <FiPaperclip size={22} />
                </button>
                <button
                    onClick={()=>setClicked("image")}
                    className={`p-2 text-white rounded-full font-semibold ${clicked==="image" ? 'bg-[#2c3e50]' : 'hover:bg-bg'}`}
                >
                    <MdOutlinePermMedia size={22} />
                </button>
                <button
                    onClick={()=>setClicked("message")}
                    className={`p-2 text-white rounded-full font-semibold ${clicked==="message" ? 'bg-[#2c3e50]' : 'hover:bg-bg'}`}
                >
                    <BsFillSendFill size={22} />
                </button>
            </div>
        </div>
    );
}

export default MessageInput;
