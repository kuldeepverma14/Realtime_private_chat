/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';

const ImageComponent = ({ mypic, h, w }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
console.log(h,w)
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    return (
        <div className='xl:col-span-1 flex justify-center items-center '>
            <img
                src={mypic}
                className={` object-cover rounded-full cursor-pointer`}
                style={{width:`${w}rem`,height:`${h}rem`}}
                alt="notfound"
                onClick={openModal}
            />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                className="flex justify-center items-center "
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            >
                <button onClick={closeModal} className="block absolute top-4 left-0 lg:left-10 z-50 m-4  text-white"><FaTimes size={24} /></button>
                <div className="relative">
                    {/* <button onClick={closeModal} className="block md:hidden absolute top-28 md:top-0 left-0 md:left-10 m-4 z-50 text-black"><FaTimes size={24} /></button> */}
                    <img src={mypic} className='max-w-[100%] max-h-screen rounded-lg border-none ' alt="notfound" />
                </div>
            </Modal>
        </div>
    );
};

export default ImageComponent;
