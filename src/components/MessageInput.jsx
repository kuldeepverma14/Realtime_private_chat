import { useState } from 'react';
import { BsFillSendFill } from 'react-icons/bs';
import { FiPaperclip } from 'react-icons/fi';
import { MdOutlinePermMedia } from 'react-icons/md';

function MessageInput() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        // Remove the red background color after a short delay
        setTimeout(() => setClicked(false), 300); // Adjust time as needed
    };

    return (
        <div className='flex items-center w-full px-3 bg-lightbg'>
            <textarea
                placeholder='Type a message'
                className='py-5 pr-10 break-words hide-scrollbar text-white bg-lightbg flex-auto w-full border-none focus:outline-none placeholder-gray-500 resize-none'
                rows={1} // You can adjust the number of visible rows
            />
            <div className='flex-shrink-0 flex gap-2'>
                <button
                    onClick={handleClick}
                    className={`p-2 text-white rounded-full font-semibold ${clicked ? 'bg-red-500' : 'hover:bg-bg'}`}
                >
                    <FiPaperclip size={22} />
                </button>
                <button
                    className='p-2 text-white rounded-full font-semibold hover:bg-bg'
                >
                    <MdOutlinePermMedia size={22} />
                </button>
                <button
                    className='p-2 text-white rounded-full font-semibold hover:bg-bg'
                >
                    <BsFillSendFill size={22} />
                </button>
            </div>
        </div>
    );
}

export default MessageInput;
